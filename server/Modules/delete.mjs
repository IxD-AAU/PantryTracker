import express from 'express';

const router = express.Router();

export const delUser = (connection) => {
    router.delete('/api/data/delete/user', (req, res) => {
        const data = req.body;

        connection.query('DELETE FROM usertable WHERE UUID = ?', [data.UUID], (err, results)=>{
            if (err){
                console.error(err);
                res.status(500).json({error: 'Database Deletion (USER) failed'});
                return;
            }
            res.json(results);
        })
    })
    return router;
}
export const delFood = (connection) => {
    router.delete('/api/data/delete/food', (req, res)=>{
        const data = req.body;

        connection.query('DELETE FROM foodtable WHERE UFID = ?', [data.UFID], (err, results)=>{
            if (err){
                console.error(err);
                res.status(500).json({error: 'Database Deletion (FOOD) failed'});
                return;
            }
            res.json(results);
        })
    })
    return router;
}
export const delHouseHold = (connection) => {
    router.delete('/api/data/delete/household', (req, res)=>{
        const data = req.body;

        connection.query('DELETE FROM householdtable WHERE UHID = ?', [data.UHID], (err, results)=>{
            if (err){
                console.error(err);
                res.status(500).json({ error: 'Database Deletion (HOUSEHOLD) failed'});
                return;
            }
            res.json(results);
        })
    })
    return router;
}
export const delRecipe = (connection) => {
    router.delete('/api/data/delete/recipe', (req, res)=>{
        const data = req.body;

        connection.query('DELETE FROM recipetable WHERE URID = ?', [data.URID], (err, results)=>{
            if (err){
                console.error(err);
                res.status(500).json({ error: 'Database Deletion (RECIPE) failed'});
                return;
            }
            res.json(results);
        })
    })
    return router;
}
export const delCabinet = (connection, operation) => {
    if (operation == "Entry"){
        router.delete('/api/data/delete/cabinet/entry', (req, res)=>{
            const data = req.body;
            const cabinetTableName = `cabinet${[data.cabinetCode]}`;

            if (!(data.cabinetCode).isInteger()){
                console.error("Provided cabinet code is not an integer");
                res.status(500).json({error: "Provided cabinet code is not an integer"});
                return;
            }

            connection.query(`DELETE FROM ${cabinetTableName} WHERE UCID = ?`, [data.UCID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({error: 'Database Deletion (CABINET ENTRY) failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "Whole"){
        router.delete('/api/data/delete/cabinet/whole', (req, res)=>{
            const data = req.body;
            const cabinetTableName = `cabinet${[data.cabinetCode]}`;

            if(!(data.cabinetCode).isInteger()){
                console.error("Provided cabinet code is not an integer");
                res.status(500).json({error: "Provided cabinet code is not an integer"});
                return;
            }

            connection.query(`DROP TABLE ${cabinetTableName}`, (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({error: 'Database Deletion (CABINET WHOLE) failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    return router;
}
export const delHouseHoldIndex = (connection, operation) => {
    if(operation == "Entry"){
        router.delete('/api/data/delete/householdindex/entry', (req, res)=>{
            const data = req.body;
            const index = `household${data.UHID}`;

            connection.query(`DELETE FROM ${index} WHERE HCIID = ?`, [data.HCIID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({ error: 'Database Deletion (HOUSEINDEX ENTRY) failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if(operation == "Whole"){
        router.delete('/api/data/delete/householdindex/whole', (req, res)=>{
            const data = req.body;
            const index = `household${data.UHID}`;

            connection.query(`DROP TABLE ${index}`, (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({ error: 'Database Deletion (HOUSEINDEX WHOLE) failde'});
                    return;
                }
                res.json(results);
            })
        })
    }
    return router;
}
export const delNotes = (connection, operation) => {
    if (operation == "Entry"){
        router.delete('/api/data/delete/notes/entry', (req, res)=>{
            const data = req.body;
            const index = `noteIndex${data.UHID}-${data.NoteIndex}`;

            connection.query(`DELETE FROM ${index} WHERE UNID = ?`, [data.UNID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({ error: 'Database Deletion (NOTEINDEX ENTRY) failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "Whole"){
        router.delete('/api/data/delete/notes/whole', (req, res)=>{
            const data = req.body;
            const index = `noteIndex${data.UHID}-${data.NoteIndex}`;

            connection.query(`DROP TABLE ${index}`, (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({ error: 'Database Deletion (NOTEINDEX WHOLE) failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    return router;
}