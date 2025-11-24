import express from 'express';

const router = express.Router();


export const getID = (connection, operation) => {
    if (operation == "user"){
        router.get('/api/data/get/user/id', (req, res)=>{
            const data = req.query;
            connection.query('SELECT UUID FROM usertable WHERE UserEmail = ?', [data.UserEmail], (err, results)=>{
                if (err){
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: USER(UUID) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "food"){
        router.get('/api/data/get/food/id', (req, res)=>{
            const data = req.query;
            connection.query('SELECT UFID FROM foodtable WHERE barCode = ?', [data.barCode], (err, results)=>{
                if (err){
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: FOOD(UFID) |data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "household1"){
        router.get('/api/data/get/household/id/1', (req, res)=>{
            const data = req.query;
            connection.query('SELECT UHID FROM householdtable WHERE HouseholdMember1 = ?', [data.HouseHoldMember1], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: HOUSEHOLD-M1(UHID) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "household2"){
        router.get('/api/data/get/household/id/2', (req, res)=>{
            const data = req.query;
            connection.query('SELECT UHID FROM householdtable WHERE HouseholdMember2 = ?', [data.HouseHoldMember2], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: HOUSEHOLD-M2(UHID) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "household3"){
         router.get('/api/data/get/household/id/3', (req, res)=>{
            const data = req.query;
            connection.query('SELECT UHID FROM householdtable WHERE HouseholdMember3 = ?', [data.HouseHoldMember3], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: HOUSEHOLD-M3(UHID) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "household4"){
        router.get('/api/data/get/household/id/4', (req, res)=>{
            const data = req.query
            connection.query('SELECT UHID FROM householdtable WHERE HouseholdMember4 = ?', [data.HouseHoldMember4], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: HOUSEHOLD-M4 (UHID) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "household5"){
        router.get('/api/data/get/household/id/5', (req, res)=>{
            const data = req.query;
            connection.query('SELECT UHID FROM householdtable WHERE HouseholdMember5 = ?', [data.HouseHoldMember5], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({error: 'Dataset: HOUSEHOLD-M5 (UHID) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "household6"){
         router.get('/api/data/get/household/id/6', (req, res)=>{
            const data = req.query;
            connection.query('SELECT UHID FROM householdtable WHERE HouseholdMember6 = ?', [data.HouseHoldMember6], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: HOUSEHOLD-M6(UHID) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    return router;
}

export const getUser = (connection, operation) => {
    if (operation == "firstname"){
        router.get('/api/data/get/user/firstname', (req, res)=>{
            const data = req.query;
            connection.query('SELECT FirstName FROM usertable WHERE UUID = ?', [data.UUID], (err, results)=>{
                if (err){
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: USER(FirstName) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "lastname"){
        router.get('/api/data/get/user/lastname', (req, res)=>{
            const data = req.query;
            connection.query('SELECT LastName FROM usertable WHERE UUID = ?', [data.UUID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({error: 'Dataset: USER(LastName) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "username"){
        router.get('/api/data/get/user/username', (req, res)=>{
            const data = req.query;
            connection.query('SELECT Username FROM usertable WHERE UUID = ?', [data.UUID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({error: 'Dataset: USER(UserName) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "accesscode"){
        router.get('/api/data/get/user/accesscode', (req, res)=>{
            const data = req.query;
            connection.query('SELECT AccessCode FROM usertable WHERE UUID = ?', [data.UUID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({error: 'Dataset: USER(AccessCode) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "email"){
        router.get('/api/data/get/user/email', (req, res)=>{
            const data = req.query;
            connection.query('SELECT UserEmail FROM usertable WHERE UUID = ?', [data.UUID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({error: 'Dataset: USER(UserEmail) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    return router;
}

export const getFood = (connection, operation) => {
    if (operation == "barcode"){
        router.get('/api/data/get/food/barCode', (req, res)=>{
            const data = req.query;
            connection.query('SELECT barCode FROM foodtable WHERE UFID = ?', [data.UFID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: FOOD(barCode) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "displayname"){
        router.get('/api/data/get/food/displayname', (req, res)=>{
            const data = req.query;
            connection.query('SELECT displayName FROM foodtable WHERE UFID = ?', [data.UFID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: FOOD(displayName) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    return router;
}

export const getHousehold = (connection, operation) => {
    if (operation == "displayname"){
        router.get('/api/data/get/household/displayname', (req, res)=>{
            const data = req.query;
            connection.query('SELECT displayName FROM householdtable WHERE UHID = ?', [data.UHID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({error: 'Dataset: HOUSEHOLD(displayName) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "invitecode"){
        router.get('/api/data/get/household/invitecode', (req, res)=>{
            const data = req.query;
            connection.query('SELECT inviteCode FROM householdtable WHERE UHID = ?', [data.UHID], (err, results)=>{
                if(err){
                    console.error(err)
                    res.status(500).json({error: 'Dataset: HOUSEHOLD(inviteCode) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "householdmember1"){
        router.get('/api/data/get/household/householdmember/1', (req, res)=>{
            const data = req.query;
            connection.query('SELECT HouseHoldMember1 FROM householdtable WHERE UHID = ?', [data.UHID], (err, results)=>{
                if (err){
                    console.error(err);
                    res.status(500).json({error: 'Dataset: HOUSEHOLD(Member1) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "householdmember2"){
        router.get('/api/data/get/household/householdmember/2', (req, res)=>{
            const data = req.query;
            connection.query('SELECT HouseHoldMember2 FROM householdtable WHERE UHID = ?', [data.UHID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({error: 'Dataset: HOUSEHOLD(Member2) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "householdmember3"){
        router.get('/api/data/get/household/householdmember/3', (req, res)=>{
            const data = req.query;
            connection.query('SELECT HouseHoldMember3 FROM householdtable WHERE UHID = ?', [data.UHID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({error: 'Dataset: HOUSEHOLD(Member3) | data retrieval failed'});
                    return
                }
                res.json(results);
            })
        })
    }
    else if (operation == "householdmember4"){
        router.get('/api/data/get/household/householdmember/4', (req, res)=>{
            const data = req.query;
            connection.query('SELECT HouseHoldMember4 FROM householdtable WHERE UHID = ?', [data.UHID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({error: 'Dataset: HOUSEHOLD(Member4) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "householdmember5"){
        router.get('/api/data/get/household/householdmember/5', (req, res)=>{
            const data = req.query;
            connection.query('SELECT HouseHoldMember5 FROM houesholdtable WHERE UHID = ?', [data.UHID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({error: 'Dataset: HOUSEHOLD(Member5) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "householdmember6"){
        router.get('/api/data/get/household/householdmember/6', (req, res)=>{
            const data = req.query;
            connection.query('SELECT HouesHoldMember6 FROM householdtable WHERE UHID = ?', [data.UHID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({error: 'Dataset: HOUSEHOLD(Member6) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    return router;  
}

export const getCabinet = (connection, operation) => {
    if (operation == "itemdisplayname"){
        router.get('/api/data/get/cabinet/itemdisplayname', (req, res)=>{
            const data = req.query;
            const cabinetTableName = `cabient${[data.cabinetCode]}`;

            if (!(data.cabinetCode).isInteger()){
                console.error("Provided cabinet code is not an integer.");
                res.status(500).json({error: 'Provided cabinet code is not an integer.'})
                return;
            }

            connection.query(`SELECT itemDisplayName FROM ${cabinetTableName} WHERE UCID = ?`, [data.UCID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({error: 'Dataset: CABINET(itemDisplayBame) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "itemamount"){
        router.get('/api/data/get/cabinet/itemamount', (req, res)=>{
            const data = req.query;
            const cabinetTableName = `cabient${[data.cabinetCode]}`;

            if (!(data.cabinetCode).isInteger()){
                console.error("Provided cabinet code is not an integer.");
                res.status(500).json({error: 'Provided cabinet code is not an integer.'})
                return;
            }

            connection.query(`SELECT itemAmount FROM ${cabinetTableName} WHERE UCID = ?`, [data.UCID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({error: 'Dataset: Cabinet(ItemAmount) | data retreieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "itemexpirationdate"){
        router.get('/api/data/get/cabinet/itemexpirationdate', (req, res)=>{
            const data = req.query;
            const cabinetTableName = `cabient${[data.cabinetCode]}`;

            if (!(data.cabinetCode).isInteger()){
                console.error("Provided cabinet code is not an integer.");
                res.status(500).json({error: 'Provided cabinet code is not an integer.'});
                return;
            }

            connection.query(`SELECT itemExpirationDate FROM ${cabinetTableName} WHERE UCID = ?`, [data.UCID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({error: 'Dataset: Cabinet(ItemExpirationDate) | data retreieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    return router;
}

export const getHouesholdCabinetIndex = (connection, operation) => {
    if (operation == "DisplayName"){
        router.get('/api/data/get/householdcabinetindex/displayname', (req, res)=>{
            const data = req.query;
            const index = `household${data.UHID}`;

            connection.query(`SELECT displayName FROM ${index} WHERE UHCIID = ?`, [data.UHCIID], (err, results)=>{
                if (err){
                    console.error(err);
                    res.status(500).json({error: 'Dataset: HOUSECABINEYINDEX (displayName) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "cabinetCode"){
        router.get('/api/data/get/housecabientindex/cabinetcode', (req, res)=>{
            const data = req.query;
            const index = `household${data.UHID}`;

            connection.query(`SELECT cabinetCode FROM ${index} WHERE UHCIID = ?`, [data.UHCIID], (err, results)=>{
                if (err){
                    console.error(err);
                    res.status(500).json({error: 'Dataset: HOUSECABINETINDEX(cabinetCode) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    return router;
}

export const getRecipe = (connection, operation) => {
    if(operation == "displayname"){
        router.get('/api/data/get/recipe/displayname', (req, res)=>{
            const data = req.query;
            connection.query('SELECT displayName FROM recipetable WHERE URID = ?', [data.URID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({error: 'Dataset: RECIPE(displayName) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "link"){
        router.get('/api/data/get/recipe/link', (req, res)=>{
            const data = req.query;
            connection.query('SELECT recipeLink FROM recipetable WHERE URID = ?', [data.URID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({error: 'Dataset: RECIPE(recipeLink) | data retrieval failed'});
                    return;
                }
                req.json(results);
            })
        })
    }
    return router;
}