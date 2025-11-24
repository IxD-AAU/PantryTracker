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
        router.put('/api/data/update/user/useremail', (req, res)=>{
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
        router.put('/api/data/update/houeshold/displayname', (req, res)=>{
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
        router.put('/api/data/update/houeshold/invitecode', (req, res)=>{
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
    else if (operation == "HouesHoldM1"){
        router.put('/api/data/update/houeshold/householdmember/1', (req, res)=>{
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
    else if (operation == "HouesHoldM2"){
        router.put('/api/data/update/houeshold/householdmember/2', (req, res)=>{
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
    else if (operation == "HouesHoldM3"){
        router.put('/api/data/update/houeshold/householdmember/3', (req, res)=>{
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
    else if (operation == "HouesHoldM4"){
        router.put('/api/data/update/houeshold/householdmember/4', (req, res)=>{
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
    else if (operation == "HouesHoldM5"){
        router.put('/api/data/update/houeshold/householdmember/5', (req, res)=>{
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
    else if (operation == "HouesHoldM6"){
        router.put('/api/data/update/houeshold/householdmember/6', (req, res)=>{
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
        router.put('/api/data/update/recipe/recipelink', (req, res)=>{
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
        const data = req.query;
        const cabinetTableName = `cabinet${[data.cabinetCode]}`;

        if (!(data.cabinetCode).isInteger()){
            console.error("Provided cabinet code is not an integer.");
            res.status(500).json({error: "Provided cabinet code is not an integer"});
            return;
        }

        connection.query(`UPDATE ${cabinetTableName} SET itemDisplayName = ? WHERE UCID = ?`, [data.displayName, data.UCID], (err, results)=>{
            if(err){
                console.error(err);
                res.status(500).json({ error: 'Database Update (CABINET DISPLAYNAME) failed'});
                return;
            }
            res.json({ success: true, affectedRows: results.affectedRows});
        })
    }
    else if (operation == "itemamount"){
        const data = req.query;
        const cabinetTableName = `cabinet${[data.cabinetCode]}`;

        if(!(data.cabinetCode).isInteger()){
            console.error(err);
            res.status(500).json({ error: 'Database Update (CABINET ITEMAMOUNT) failed'});
            return;
        }

        connection.query(`UPDATE ${cabinetTableName} SET itemAmount = ? WHERE UCID = ?`, [data.itemAmount, data.UCID], (err, results)=>{
            if (err){
                console.error(err);
                res.status(500).json({ error: 'Database Update (CABINET AMOUNT) failed'});
                return;
            }
            res.json ({ success: true, affectedRows: results.affectedRows});
        })
    }
    else if (operation == "itemexpirationdate"){
        const data = req.query;
        const cabinetTableName = `cabinet${[data.cabinetCode]}`;

        if(!(data.cabinetCode).isInteger()){
            console.error(err);
            res.status(500).json({ error: 'Database Update (CABINET EXPIRATIONDATE'});
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
    }
    return router;
}


