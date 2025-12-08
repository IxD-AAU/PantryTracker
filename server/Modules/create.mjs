import express from 'express';

const router = express.Router();

export const createCabinet = (connection) => {
    router.post('/api/data/create/cabinet', (req, res)=>{
        const data = req.body;
        const cabinetTableName = `cabinet${[data.cabinetCode]}`;

        if(!(data.cabinetCode).inInteger()){
            console.error("Provided cabinet code is not an integer");
            res.status(500).json({ error: "Provided cabinet code is not an integer"});
            return;
        }

        connection.query(`CREATE TABLE ${cabinetTableName} (UCID INT NULL AUTO_INCREMENT, itemID INT NOT NULL, itemAmount INT NOT NULL, itemExpirationDate DATE NOT NULL, PRIMARY KEY (UCID));`, (err, results)=>{
            if (err){
                console.error(err);
                res.status(500).json({error: 'Database Creation (CABINET) failde'});
                return;
            }
            res.json({ success: true, id: results.insertId});
        })
    })
    return router;
}
export const createHouseIndex = (connection) => {
    router.post('/api/data/create/houseindex', (req, res)=>{
        const data = req.body;
        const index = `household${data.UHID}`;

        connection.query(`CREATE TABLE ${index} (HCIID INT NOT NULL AUTO_INCREMENT, displayName VARCHAR(90) NOT NULL, cabinetCode VARCHAR(45) NOT NULL, cabinetType VARCHAR(8) NOT NULL, PRIMARY KEY (HCIID));`,(err, results)=>{
            if (err){
                console.error(err);
                res.status(500).json({error: 'Database Creation (HOUSEINDEX) failed'});
                return;
            }
            res.json({ success: true, id: results.insertId});
        })
    })
    return router;
}
export const createNoteIndex = (connection) => {
    router.post('/api/data/create/noteindex', (req, res)=>{
        const data = req.body;
        const index = `noteIndex${data.UHID}-${data.NoteIndex}`;

        connection.query(`CREATE TABLE ${index} (UNID INT AUTO_INCREMENT, amount INT NOT NULL, text VARCHAR(500), parentId INT NULL, PRIMARY KEY(UNID));`, (err, results)=>{
            if (err){
                console.error(err);
                res.status(500).json({error: 'Database Creation (NOTEINDEX) failed'});
                return;
            }
            res.json({ success: true, id: results.insertId});
        })
    })
    return router;
}

export const migrateNoteIndex = (connection) => {
    router.post('/api/data/migrate/noteindex', (req, res)=>{
        const data = req.body;
        const index = `noteIndex${data.UHID}`;

        // Check if parentId column exists
        connection.query(`SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME='${index}' AND COLUMN_NAME='parentId'`, (err, results)=>{
            if (err){
                console.error(err);
                res.status(500).json({error: 'Migration check failed'});
                return;
            }

            // If parentId doesn't exist, add it
            if (results.length === 0) {
                connection.query(`ALTER TABLE ${index} ADD COLUMN parentId INT NULL`, (alterErr, alterResults)=>{
                    if (alterErr){
                        console.error(alterErr);
                        res.status(500).json({error: 'Migration failed'});
                        return;
                    }
                    res.json({ success: true, message: 'parentId column added' });
                })
            } else {
                res.json({ success: true, message: 'parentId column already exists' });
            }
        })
    })
    return router;
}