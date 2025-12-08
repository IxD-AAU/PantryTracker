import express, { json } from 'express';

const router = express.Router();

export const updateUser = (connection, operation) => {
    if (operation == "FirstName"){
        router.put('/api/data/update/user/firstname', (req, res)=>{
            const data = req.body;

            connection.query('UPDATE usertable SET FirstName = ? WHERE UUID = ?', [data.FirstName, data.UUID], (err, results)=>{
                if (err){
                    console.error(err);
                    res.status(500).json({ error: 'Database Update (USER FIRSTNAME) failed'});
                    return;
                }
                res.json({ success: true, affectedRows: results.affectedRows});
            })
        })
    }
    else if (operation == "LastName"){
        router.put('/api/data/update/user/lastname', (req, res)=>{
            const data = req.body;

            connection.query('UPDATE usertable SET LastName = ? WHERE UUID = ?', [data.LastName, data.UUID], (err, results)=>{
                if (err){
                    console.error(err);
                    res.status(500).json({ error: 'Database Update (USER LASTNAME) failed'});
                    return;
                }
                res.json({ success: true, affectedRows: results.affectedRows});
            })
        })
    }
    else if (operation == "UserName"){
        router.put('/api/data/update/user/username', (req, res)=>{
            const data = req.body;

            connection.query('UPDATE usertable SET UserName = ? WHERE UUID = ?', [data.UserName, data.UUID], (err, results)=>{
                if (err){
                    console.error(err);
                    res.status(500).json({ error: 'Database Update (USER USERNAME) failed'});
                    return;
                }
                res.json({ success: true, affectedRows: results.affectedRows});
            })
        })
    }
    else if (operation == "AccessCode"){
        router.put('/api/data/update/user/accesscode', (req, res)=>{
            const data = req.body;

            connection.query('UPDATE usertable SET AccessCode = ? WHERE UUID = ?', [data.AccessCode, data.UUID], (err, results)=>{
                if (err){
                    console.error(err);
                    res.status(500).json({ error: 'Database Update (USER ACCESSCODE) failed'});
                    return;
                }
                res.json({ success: true, affectedRows: results.affectedRows});
            })
        })
    }
    else if (operation == "UserEmail"){
        router.put('/api/data/update/user/email', (req, res)=>{
            const data = req.body;

            connection.query('UPDATE usertable SET UserEmail = ? WHERE UUID = ?', [data.UserEmail, data.UUID], (err, results)=>{
                if (err){
                    console.error(err);
                    res.status(500).json({ errror: 'Database Update (USER USEREMAIL) failed'});
                    return;
                }
                res.json({ success: true, affectedRows: results.affectedRows});
            })
        })
    }
    return router;
}
export const updateFood = (connection, operation) => {
    if (operation == "DisplayName"){
        router.put('/api/data/update/food/displayname', (req, res)=>{
            const data = req.body;

            connection.query('UPDATE foodtable SET displayName = ? WHERE UFID = ?', [data.displayName, data.UFID], (err, results)=>{
                if (err){
                    console.error(err);
                    res.status(500).json({error: 'Database Update (FOOD DISPLAYNAME) failed'});
                    return;
                }
                res.json({ success: true, affectedRows: results.affectedRows});
            })
        })
    }
    else if (operation == "BarCode"){
        router.put('/api/data/update/food/barcode', (req, res)=>{
            const data = req.body;

            connection.query('UPDATE foodtable SET barCode = ? WHERE UFID = ?', [data.barCode, data.UFID], (err, results)=>{
                if (err){
                    console.error(err);
                    res.status(500).json({ error: 'Database Update (FOOD BARCODE) failed'});
                    return;
                }
                res.json({ success: true, affectedRows: results.affectedRows});
            })
        })
    }
    return router;

}
export const updateHouseHold = (connection, operation) => {
    if (operation == "DisplayName"){
        router.put('/api/data/update/household/displayname', (req, res)=>{
            const data = req.body;

            connection.query('UPDATE householdtable SET displayName = ? WHERE UHID = ?', [data.displayName, data.UHID], (err, results)=>{
                if (err){
                    console.error(err);
                    res.status(500).json({ error: 'Database Update (HOUSEHOLD DISPLAYNAME) failed'});
                    return;
                }
                res.json({ success: true, affectedRows: results.affectedRows});
            })
        })
    }
    else if (operation == "InviteCode"){
        router.put('/api/data/update/household/invitecode', (req, res)=>{
            const data = req.body;

            connection.query('UPDATE householdtable SET inviteCode = ? WHERE UHID = ?', [data.inviteCode, data.UHID], (err, results)=>{
                if (err){
                    console.error(err);
                    res.status(500).json({ error: 'Database Update (HOUSEHOLD  INVITECODE) failed'});
                    return;
                }
                res.json({ success: true, affectedRows: results.affectedRows});
            })
        })
    }
    else if (operation == "HouseHoldM1"){
        router.put('/api/data/update/household/householdmember/1', (req, res)=>{
            const data = req.body;

            connection.query('UPDATE householdtable SET HouseHoldMember1 = ? WHERE UHID = ?', [data.HouseHoldMember1, data.UHID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({ error: 'Database Update (HOUSEHOLD M1) failed'});
                    return;
                }
                res.json({ success: true, affectedRows: results.affectedRows});
            })
        })
    }
    else if (operation == "HouseHoldM2"){
        router.put('/api/data/update/household/householdmember/2', (req, res)=>{
            const data = req.body;

            connection.query('UPDATE householdtable SET HouseHoldMember2 = ? WHERE UHID= ?', [data.HouseHoldMember2, data.UHID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({ error: 'Database Update (HOUSEHOLD M2) failed'});
                    return;
                }
                res.json({ success: true, affectedRows: results.affectedRows});
            })
        })
    }
    else if (operation == "HouseHoldM3"){
        router.put('/api/data/update/household/householdmember/3', (req, res)=>{
            const data = req.body;

            connection.query('UPDATE householdtable SET HouseHoldMember3 = ? WHERE UHID = ?', [data.HouseHoldMember3,data.UHID], (err, results)=>{
                if (err){
                    console.error(err);
                    res.status(500).json({ error: 'Database Update (HOUSEHOLD M3) failed'});
                    return;
                }
                res.json({ success: true, affectedRows: results.affectedRows});
            })
        })
    }
    else if (operation == "HouseHoldM4"){
        router.put('/api/data/update/household/householdmember/4', (req, res)=>{
            const data = req.body;

            connection.query('UPDATE householdtable SET HouseHoldMember4 = ? WHERE UHID = ?', [data.HouseHoldMember4, data.UHID], (err, results)=>{
                if (err){
                    console.error(err);
                    res.status(500).json({ error: 'Database Update (HOUSEHOLD M4) failed'});
                    return;
                }
                res.json({ success: true, affectedRows: results.affectedRows});
            })
        })
    }
    else if (operation == "HouseHoldM5"){
        router.put('/api/data/update/household/householdmember/5', (req, res)=>{
            const data = req.body;

            connection.query('UPDATE householdtable SET HouseHoldMember5 = ? WHERE UHID = ?', [data.HouseHoldMember5, data.UHID], (err, results)=>{
                if (err){
                    console.error(err);
                    res.status(500).json({ error: 'Database Update (HOUSEHOLD M5) failed'});
                    return;
                }
                res.json({ success: true, affectedRows: results.affectedRows});
            })
        })
    }
    else if (operation == "HouseHoldM6"){
        router.put('/api/data/update/household/householdmember/6', (req, res)=>{
            const data = req.body;

            connection.query('UPDATE householdtable SET HouseHoldMember6 = ? WHERE UHID = ?', [data.HouseHoldMember6, data.UHID], (err, results)=>{
                if (err){
                    console.error(err);
                    res.status(500).json({ error: 'Database Update (HOUSEHOLD M6) failed'});
                    return;
                }
                res.json({ success: true, affectedRows: results.affectedRows});
            })
        })
    }
    return router;
}
export const updateRecipe = (connection, operation) => {
    if (operation == "DisplayName"){
        router.put('/api/data/update/recipe/displayName', (req, res)=>{
            const data = req.body;

            connection.query('UPDATE recipetable SET displayName = ? WHERE URID = ?', [data.displayName, data.URID], (err, results)=>{
                if (err){
                    console.error(err);
                    res.status(500).json({ error: 'Database Update (RECIPE DISPLAYNAME) failed'});
                    return;
                }
                res.json({ success: true, affectedRows: results.affectedRows});
            })
        })
    }
    else if (operation == "RecipeLink"){
        router.put('/api/data/update/recipe/link', (req, res)=>{
            const data = req.body;

            connection.query('UPDATE recipetable SET displayName = ? WHERE URID = ?',[data.recipeLink, data.URID], (err, results)=>{
                if (err){
                    console.error(err);
                    res.status(500).json({ error: 'Database Update (RECIPE RECIPELINK) failed'});
                    return;
                }
                res.json({ success: true, affectedRows: results.affectedRows});
            })
        })
    }
    return router;
}
export const updateCabinet = (connection, operation) => {
    if (operation == "itemdisplayname"){
        router.put('/api/data/update/cabinet/ID', (req, res)=>{
            const data = req.query;
            const cabinetTableName = `cabinet${[data.cabinetCode]}`;

            if (!(data.cabinetCode).isInteger()){
                console.error("Provided cabinet code is not an integer.");
                res.status(500).json({error: "Provided cabinet code is not an integer."});
                return;
            }

            connection.query(`UPDATE ${cabinetTableName} SET itemID = ? WHERE UCID = ?`, [data.displayName, data.UCID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({ error: 'Database Update (CABINET ITEMID) failed'});
                    return;
                }
                res.json({ success: true, affectedRows: results.affectedRows});
            })
        })
        
    }
    else if (operation == "itemamount"){
        router.put('/api/data/update/cabinet/amount', (req, res)=>{
            const data = req.query;
            const cabinetTableName = `cabinet${[data.cabinetCode]}`;

            if (!(data.cabinetCode).isInteger()){
                console.error("Provided cabinet code is not an integer.");
                res.status(500).json({ error: 'Provided cabinet code is not an integer.'});
                return;
            }
            connection.query(`UPDATE ${cabinetTableName} SET itemAmount = ? WHERE UCID = ?`, [data.itemAmount, data.UCID], (err, results)=>{
                if (err){
                    console.error(err);
                    res.status(500).json({ error: 'Database Update (CABINET AMOUNT) failde'});
                    return;
                }
                res.json({ success: true, affectedRows: results.affectedRows});
            })
        })
    }
    else if (operation == "itemexpirationdate"){
        router.put('/api/data/update/cabinet/expirationdate', (req, res)=>{
            const data = req.query;
            const cabinetTableName = `cabinet${[data.cabinetCode]}`;

            if(!(data.cabinetCode).isInteger()){
                console.error("Provided cabinet code is not an integer.");
                res.status(500).json({ error: "Provided cabinet code is not an integer."});
                return;
            }

            connection.query(`UPDATE ${cabinetTableName} SET itemExpirationDate = ? WHERE UCID = ?`, [data.itemExpirationDate, data.UCID], (err, results)=>{
                if (err){
                    console.error(err);
                    res.status(500).json({ error: 'Database Update (CABINET EXPIRATIONDATE) failed'});
                    return;
                }
                res.json({ success: true, affectedRows: results.affectedRows});
            })
        })
    }
    return router;
}
export const updateHouseHoldCabinetIndex = (connection, operation) => {
    if (operation == "DisplayName"){
        router.put('/api/data/update/householdcabinetindex/displayname', (req, res)=>{
            const data = req.query;
            const index = `household${data.UHID}`;

            connection.query(`UPDATE ${index} SET DisplayName = ? WHERE HCIID = ?`, [data.displayName, data.HCIID], (err, results)=>{
                if (err){
                    console.error(err);
                    res.status(500).json({ error: 'Database Update (INDEX DISPLAYNAME) failed'});
                    return;
                }
                res.json({ success: true, affectedRows: results.affectedRows});
            })
        })
    }
    else if (operation == "CabinetType"){
        router.put('/api/data/update/householdcabinetindex/cabinettype', (req, res)=>{
            const data = req.query;
            const index = `household${data.UHID}`;

            connection.query(`UPDATE ${index} SET cabinetType = ? WHERE HCIID = ?`, [data.cabinetType, data.HCIID], (err, results)=>{
                if (err){
                    console.error(err);
                    res.status(500).json({error: 'Database Update (INDEX CABINETTYPE) failed'});
                    return;
                }
                res.json({ success: true, affectedRows: results.affectedRows});
            })
        })
    }
    return router;
}

export const updateNoteIndex = (connection, operation) => {
    if (operation == "Amount"){
        router.put('/api/data/update/note/amount', (req, res)=>{
            const data = req.query;
            const index = `noteIndex${data.UHID}-${data.NoteIndex}`;

            connection.query(`UPDATE ${index} SET amount = ? WHERE UNID = ?`, [data.itemAmount, data.UNID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({error: 'Database Update (NOTEINDEX) failed'});
                    return;
                }
                res.json({ success: true, affectedRows: results.affectedRows});
            })
        })
        return router;
    }
    else if (operation == "Text"){
        router.put('/api/data/update/note/text', (req, res)=>{
            const data = req.query;
            const index = `noteIndex${data.UHID}-${data.NoteIndex}`;

            connection.query(`UPDATE ${index} SET text = ? WHERE UNID = ?`, [data.text, data.UNID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({error: 'Database Update (NOTEINDEX) failed'});
                    return;
                }
                res.json({ success: true, affectedRows: results.affectedRows});
            })
        })
        return router;
    }
}