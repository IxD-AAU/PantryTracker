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

        connection.query(`CREATE TABLE ${cabinetTableName} (UCID INT NULL AUTO_INCREMENT, itemDisplayName VARCHAR(90) NOT NULL, itemAmount INT NOT NULL, itemExpirationDate NOT NULL, PRIMARY KEY (UCID));`, (err, results)=>{
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
        const index = `household${[data.UHID]}`;

        connection.query(`CREATE TABLE ${index} (UHCIID INT NULL AUTO_INCREMENT,displayName VARCHAR(90) NOT NULL, cabinetCode VARCHAR(45) NOT NULL, PRIMARY KEY (UHCIID));`,(err, results)=>{
            if (err){
                console.error(err);
                res.status(500).json({error: 'Database Creation (HOUSEINDEX) failed'});
                return;
            }
            res.json({ success: true, id: results.insertId});
        })
    })
}