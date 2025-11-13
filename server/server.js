const mysql = require('mysql2');

const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "DBuser",
    password: "DBpassword",
    database: "sys"
});

connection.connect(function(err){
    if (err){
        console.error ('DB connect error: ' + err.code, err.message);
        process.exit(1);
    }
    console.log('DB connected as id ' + connection.threadId);
});

app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.send('Welcome to Pantry Tracker API');
});

app.get('/api/data', (req, res) => {
    connection.query('SELECT * FROM usertable', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Database query failed' });
            return;
        }
        res.json(results);
    });
});

//GETTING CODE:
    // GET ID BASED ON UNIQUE FIELD ENTRY:
app.get('/api/data/get/user/id', (req, res)=>{
    const data = req.query;
    connection.query('SELECT UUID FROM usertable WHERE UserEmail = ?', [data.UserEmail], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({ error: 'Dataset: USER(UUID) | data retrieval failed'});
            return;
        }
        res.json(results);
    })
})

app.get('/api/data/get/food/id', (req, res)=>{
    const data = req.query;
    connection.query('SELECT UFID FROM foodtable WHERE barCode = ?', [data.barCode], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({ error: 'Dataset: FOOD(UFID) | data retrieval failed'});
            return;
        }
        res.json(results);
    })
})

app.get('/api/data/get/household/id/1', (req, res)=>{
    const data = req.query;
    connection.query('SELECT UHID FROM householdtable WHERE HouseholdMember1 = ?', [data.HouseHoldMember1], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({ error: 'Dataset: HOUSEHOLD(UHID) | data retrieval failed'});
            return;
        }
        res.json(results);
    })
})

app.get('/api/data/get/household/id/2', (req, res)=>{
    const data = req.query;
    connection.query('SELECT UHID FROM householdtable WHERE HouseholdMember2 = ?', [data.HouseHoldMember2], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({ error: 'Dataset: HOUSEHOLD(UHID) | data retrieval failed'});
            return;
        }
        res.json(results);
    })
})

app.get('/api/data/get/household/id/3', (req, res)=>{
    const data = req.query;
    connection.query('SELECT UHID FROM householdtable WHERE HouseholdMember3 = ?', [data.HouseHoldMember3], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({ error: 'Dataset: HOUSEHOLD(UHID) | data retrieval failed'});
            return;
        }
        res.json(results);
    })
})

app.get('/api/data/get/household/id/4', (req, res)=>{
    const data = req.query;
    connection.query('SELECT UHID FROM householdtable WHERE HouseholdMember4 = ?', [data.HouseHoldMember4], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({ error: 'Dataset: HOUSEHOLD(UHID) | data retrieval failed'});
            return;
        }
        res.json(results);
    })
})

app.get('/api/data/get/household/id/5', (req, res)=>{
    const data = req.query;
    connection.query('SELECT UHID FROM householdtable WHERE HouseholdMember5 = ?', [data.HouseHoldMember5], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({ error: 'Dataset: HOUSEHOLD(UHID) | data retrieval failed'});
            return;
        }
        res.json(results);
    })
})

app.get('/api/data/get/household/id/6', (req, res)=>{
    const data = req.query;
    connection.query('SELECT UHID FROM householdtable WHERE HouseholdMember6 = ?', [data.HouseHoldMember6], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({ error: 'Dataset: HOUSEHOLD(UHID) | data retrieval failed'});
            return;
        }
        res.json(results);
    })
})

    // Getting User Info based on ID
app.get('/api/data/get/user/firstname', (req, res) =>{
    const data = req.query;
    connection.query('SELECT FirstName FROM usertable WHERE UUID = ?', [data.UUID], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({ error: 'Dataset: USER(FirstName) | data retrieval failed'});
            return;
        }
        res.json(results);
    })
})
app.get('/api/data/get/user/lastname', (req, res)=>{
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
app.get('/api/data/get/user/username', (req,res)=>{
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
app.get('/api/data/get/user/accesscode', (req, res)=>{
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
app.get('/api/data/get/user/email', (req, res)=>{
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

    //Getting Food Info based on ID:
app.get('/api/data/get/food/barCode', (req, res)=>{
    const data = req.query;
    connection.query('SELECT barCode FROM foodtable WHERE UFID = ?', [data.UFID],(err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({error: 'Dataset: FOOD(barCode) | data retrieval failed'});
            return;
        }
        res.json(results);
    })
})

app.get('/api/data/get/food/displayName', (req, res)=>{
    const data = req.query;
    connection.query('SELECT displayName FROM foodtable WHERE UFID = ?', [data.UFID], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({error: 'Dataset: FOOD(displayName) | data retrieval failed'});
            return;
        }
        res.json(results);
    })
})

    //Getting HouseHold Info based on ID:
app.get('/api/data/get/household/displayName', (req, res)=>{
    const data = req.query;
    connection.query('SELECT displayName FROM householdtable WHERE UHID = ?', [data.UHID], (err, results)=>{
        if (err){
            console.error(err);
            res.status(500).json({error: 'Dataset: HOUSEHOLD(displayName) | data retrieval failed'});
            return;
        }
        res.json(results);
    })
})

app.get('/api/data/get/household/inviteCode', (req, res)=>{
    const data = req.query;
    connection.query('SELECT inviteCode FROM householdtable WHERE UHID = ?', [data.UHID], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({error: 'Dataset: HOUSEHOLD(inviteCode) | data retrieval failed'});
            return;
        }
        res.json(results);
    })
})

app.get('/api/data/get/household/householdmember1', (req, res)=>{
    const data = req.query;
    connection.query('SELECT HouseHoldMember1 FROM householdtable WHERE UHID = ?', [data.UHID], (err, results)=>{
        if (err){
            console.error(err);
            res.status(500).json({error: 'Dataset: HOUSEHOLD(HouseholdMember1) | data retrieval failed'});
            return;
        }
        res.json(results);
    })
})

app.get('/api/data/get/household/householdmember2', (req,res)=>{
    const data = req.query;
    connection.query('SELECT HouseHoldMember2 FROM householdtable WHERE UHID = ?', [data.UHID], (err, results)=>{
        if (err){
            console.error(err);
            res.status(500).json({error: 'Dataset: HOUSEHOLD(HouseholdMember2) | data retrieval failed'});
            return;
        }
        res.json(results);
    })
})

app.get('/api/data/get/household/householdmember3', (req,res)=>{
    const data = req.query;
    connection.query('SELECT HouseHoldMember3 FROM householdtable WHERE UHID = ?', [data.UHID], (err, results)=>{
        if (err){
            console.error(err);
            res.status(500).json({error: 'Dataset: HOUSEHOLD(HouseholdMember3) | data retrieval failed'});
            return;
        }
        res.json(results);
    })
})

app.get('/api/data/get/household/householdmember4', (req,res)=>{
    const data = req.query;
    connection.query('SELECT HouseHoldMember4 FROM householdtable WHERE UHID = ?', [data.UHID], (err, results)=>{
        if (err){
            console.error(err);
            res.status(500).json({error: 'Dataset: HOUSEHOLD(HouseholdMember4) | data retrieval failed'});
            return;
        }
        res.json(results);
    })
})

app.get('/api/data/get/household/householdmember5', (req, res)=>{
    const data = req.query;
    connection.query('SELECT HouseHoldMember5 FROM householdtable WHERE UHID =?', [data.UHID], (err,results)=>{
        if(err){
            console.error(err);
            res.status(500).json({error: 'Dataset: HOUSEHOLD(HouseholdMember5) | data retrieval failed'});
            return;
        }
        res.json(results);
    })
})

app.get('/api/data/get/household/householdmember6', (req, res)=>{
    const data = req.query;
    connection.query('SELECT HouseHoldMember6 FROM householdtable WHERE UHID = ?', [data.UHID], (err,results)=>{
        if(err){
            console.error(err);
            res.status(500).json({error: 'Dataset: HOUSEHOLD(HouseholdMember6) | data retrieval failed'});
            return;
        }
        res.json(results);
    })
})

    //Getter code for Cabinets
app.get('/api/data/get/cabinet/itemdisplayname', (req, res)=>{
    const data = req.query;
    const cabinetCode = data.cabinetCode;
    const cabinetTableName = `cabinet${cabinetCode}`;

    if (!(data.cabinetCode).isInteger()){
        console.error("Provided cabinet code is not an integer.");
        res.status(500).json({error: 'Provided cabinet code is not an integer.'})
        return;
    }

    connection.query(`SELECT itemDisplayName FROM ${cabinetTableName} WHERE UCID = ?`, [data.UCID], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({error: 'Dataset: CABINET(itemDisplayName) | data retrieval failed'});
            return;
        }
        res.json(results);
    })
})

app.get('/api/data/get/cabinet/itemamount', (req, res)=>{
    const data = req.query;
    const cabinetCode = data.cabinetCode;
    const cabinetTableName = `cabinet${cabinetCode}`;

    if (!(data.cabinetCode).isInteger()){
        console.error("Provided cabinet code is not an integer.");
        res.status(500).json({error: 'Provided cabinet code is not an integer.'});
        return;
    }

    connection.query(`SELECT itemAmount FROM ${cabinetTableName} WHERE UCID = ?`, [data.UCID], (err,results)=>{
        if(err){
            console.error(err);
            res.status(500).json({error: 'Dataset: CABINET(itemAmount) | data retrieval failed'});
            return;
        }
        res.json(results);
    })
})

app.get('/api/data/get/cabinet/itemexpirationdate', (req,res)=>{
    const data = req.query;
    const cabinetCode = data.cabinetCode;
    const cabinetTableName = `cabinet${cabinetCode}`;

    if (!(data.cabinetCode).isInteger()){
        console.error("Provided cabinet code is not an integer.");
        res.status(500).json({error: 'Provided cabinet code is not an integer.'});
    }

    connection.query(`SELECT itemExpirationDate FROM ${cabinetTableName} WHERE UCID = ?`, [data.UCID], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({error: 'Dataset: CABINET(itemExpirationDate) | data retrieval failed'});
            return;
        }
        res.json(results);
    })
})

    //Getter code for Household Cabinet Index
app.get('/api/data/get/housecabinetindex/cabinetCode', (req, res)=>{
    const data = req.query;
    const index = `household${data.UHID}`;

    connection.query(`SELECT cabinetCode FROM ${index} WHERE UHCIID = ?`, [data.UHCIID], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({error: 'Dataset: HOUSECABINETINDEX(cabientCode) | data retrieval failed'});
            return;
        }
        res.json(results);
    })
})

    //Getter code for recipe
app.get('/api/data/get/recipe/displayname', (req, res)=>{
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

app.get('/api/data/get/recipe/link', (req, res)=>{
    const data = req.query;

    connection.query('SELECT recipeLink FROM recipetable WHERE URID = ?', [data.URID], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({error: 'Dataset: RECIPE(recipeLink) | data retrieval failed'});
            return;
        }
        res.json(results);
    })
})

//INSERTION CODE:
app.post('/api/data/add/user', (req, res) => {
    const data = req.body;
    connection.query('INSERT INTO usertable (FirstName, LastName, Username, AccessCode, UserEmail) VALUES (?,?,?,?,?)', [data.FirstName, data.LastName, data.Username, data.AccessCode, data.UserEmail], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({ error: 'Database insert failed' });
            return;
        }
        res.json({ success: true, id: results.insertId });
    })
})

app.post('/api/data/add/food', (req, res) => {
    const data = req.body;
    connection.query('INSERT INTO foodtable (barCode, displayName) VALUES (?,?)', [data.barCode, data.displayName], (err, results) => {
        if(err){
            console.error(err);
            res.status(500).json({ error: 'Database insert failed'});
            return;
        }
        res.json({ success: true, id: results.insertId});
    })
})

app.post('/api/data/add/household', (req,res) => {
    const data = req.body;
    connection.query('INSERT INTO householdtable (displayName, inviteCode, HouseHoldMember1, HouseHoldMember2, HouseHoldMember3, HouseHoldMember4, HouseHoldMember5, HouseHoldMember6) VALUES (?,?,?,?,?,?,?,?)',[data.displayName, data.inviteCode, data.HouseHoldMember1, data.HouseHoldMember2, data.HouseHoldMember3, data.HouseHoldMember4, data.HouseHoldMember5, data.HouseHoldMember6],( err, results)=>{
        if (err){
            console.error(err);
            res.status(500).json({error: 'Database insert failed'});
            return;
        }
        res.json({ success: true, id: results.insertId});
    })
})

app.post('/api/data/add/cabinet', (req, res)=>{
    const data = req.body;
    const cabinetCode = data.cabinetCode;
    const cabinetTableName = `cabinet${cabinetCode}`

    if (!(data.cabinetCode).isInteger()){
        console.error("Provided cabinet code is not an integer.");
        res.status(500).json({error: 'Provided cabinet code is not an integer.'})
        return;
    }

    connection.query(`INSERT INTO ${cabinetTableName} (itemDisplayName, itemAmount, expirationDate) VALUES (?,?,?)`,[data.displayName, data.amount, data.expirationDate], (err, results)=>{
        if (err){
            console.error(err);
            res.status(500).json({error: 'Database insert failed'});
            return;
        }
        res.json({success: true, id: results.insertId});
    })
})


//UPDATE CODE:
app.post('/api/data/update/user/firstname', (req,res)=>{
    const data = req.body;

    connection.query('UPDATE usertable SET FirstName = ? WHERE UUID = ?', [data.FirstName, data.UUID], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({ error: 'Databas update failed'});
            return;
        }
        res.json ({ success: true, id: results.insertId});
    })
    
})

app.post('/api/data/update/user/lastname', (req, res)=>{
    const data = req.body;

    connection.query('UPDATE usertable SET LastName = ? WHERE UUID = ?', [data.LastName, data.UUID], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({ error: 'Database update failed'});
            return;
        }
        res.json({success: true, id: results.insertId});
    })
})

app.post('/api/data/update/user/username', (req, res)=>{
    const data = req.body;

    connection.query('UPDATE usertable SET Username = ? WHERE UUID = ?', [data.Username, data.UUID], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({ error: 'Database update failed'});
            return;
        }
        res.json({ success: true, id: results.insertId});
    })
})

app.post('/api/data/update/user/accesscode', (req, res)=>{
    const data = req.body;

    connection.query('UPDATE usertable SET AccessCode = ? WHERE UUID = ?', [data.AccessCode, data.UUID], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({ error: 'Databse update failed'});
            return;
        }
        res.json({ success: true, id: results.insertId});
    })
})

app.post('/api/data/update/user/useremail', (req, res)=>{
    const data = req.body;

    connection.query('UPDATE usertable SET UserEmail = ? WHERE UUID = ?', [data.UserEmail, data.UUID], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({error: 'Database update failed'});
            return;
        }
        res.json({ success: true, id: results.insertId});
    })
})

app.post('/api/data/update/food/displayname', (req, res)=>{
    const data = req.body;

    connection.query('UPDATE foodtable SET displayName = ? WHERE UFID = ?', [data.displayName, data.UFID], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({error: 'Database update failed'});
            return;
        }
        res.json({ success: true, id: results.insertId});
    })
})

app.post('/api/data/update/food/barcode', (req, res)=>{
    const data = req.body;

    connection.query('UPDATE foodtable SET barCode = ? WHERE UFID = ?', [data.barCode, data.UFID], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({error: 'Database update failed'});
            return;
        }
        res.json({ success: true, id: results.insertId});
    })
})

app.post('/api/data/update/household/displayname', (req, res)=>{
    const data = req.body;

    connection.query('UPDATE householdtable SET displayName = ? WHERE UHID = ?', [data.displayName, data.UHID], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({ error: 'Database update failed'});
            return;
        }
        res.json({ success: true, id: results.insertId});
    })
})

app.post('/api/data/update/household/inviteCode', (req, res)=>{
    const data = req.body;

    connection.query('UPDATE householdtable SET inviteCode = ? WHERE UHID = ?', [data.inviteCode, data.UHID], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({ error: 'Database update failed'});
            return;
        }
        res.json({ success: true, id: results.insertId});
    })
})

app.post('/api/data/update/household/householdmember/1', (req, res)=>{
    const data = req.body;

    connection.query('UPDATE householdtable SET HouseHoldMember1 = ? WHERE UHID = ?', [data.HouseHoldMember1, data.UHID], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({ error: 'Database update failed'});
            return;
        }
        res.json({ success: true, id: results.insertId});
    })
})

app.post('/api/data/update/household/householdmember/2', (req, res)=>{
    const data = req.body;

    connection.query('UPDATE householdtable SET HouseHoldMember2 = ? WHERE UHID = ?', [data.HouseHoldMember2, data.UHID], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({ error: 'Database update failed'});
            return;
        }
        res.json({ success: true, id: results.insertId});
    })
})

app.post('/api/data/update/household/householdmember/3', (req, res)=>{
    const data = req.body;

    connection.query('UPDATE householdtable SET HouseHoldMember3 = ? WHERE UHID = ?', [data.HouseHoldMember3, data.UHID], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({ error: 'Database update failed'});
            return;
        }
        res.json({ success: true, id: results.insertId});
    })
})

app.post('/api/data/update/household/householdmember/4', (req, res)=>{
    const data = req.body;

    connection.query('UPDATE householdtable SET HouseHoldMember4 = ? WHERE UHID = ?', [data.HouseHoldMember4, data.UHID], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({ error: 'Database update failed'});
            return;
        }
        res.json({ success: true, id: results.insertId});
    })
})

app.post('/api/data/update/household/householdmember/5', (req, res)=>{
    const data = req.body;

    connection.query('UPDATE householdtable SET HouseHoldMember5 = ? WHERE UHID = ?', [data.HouseHoldMember5, data.UHID], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({ error: 'Database update failed'});
            return;
        }
        res.json({ success: true, id: results.insertId});
    })
})

app.post('/api/data/update/household/householdmember/6', (req, res)=>{
    const data = req.body;

    connection.query('UPDATE householdtable SET HouseHoldMember6 = ? WHERE UHID = ?', [data.HouseHoldMember6, data.UHID], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({ error: 'Database update failed'});
            return;
        }
        res.json({ success: true, id: results.insertId});
    })
})

app.post('/api/data/update/recipe/displayName', (req, res)=>{
    const data = req.body;

    connection.query('UPDATE recipetable SET displayName = ? WHERE URID = ?', [data.displayName, data.URID], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({ error: 'Database update failed'});
            return;
        }
        res.json({ success: true, id: results.insertId});
    })
})

app.post('/api/data/update/recipe/recipelink', (req, res)=>{
    const data = req.body;

    connection.query('UPDATE recipetable SET recipeLink = ? WHERE URID = ?', [data.recipeLink , data.URID], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({ error: 'Database update failed'});
            return;
        }
        res.json({ success: true, id: results.insertId});
    })
})

app.post('/api/data/update/cabinet/itemdisplayname', (req, res)=>{
    const data = req.body;
    const cabinetCode = data.cabinetCode;
    const cabinetTableName = `cabinet${cabinetCode}`

    if (!(data.cabinetCode).isInteger()){
        console.error("Provided cabinet code is not an integer.");
        res.status(500).json({error: 'Provided cabinet code is not an integer.'})
        return;
    }

    connection.query(`UPDATE ${cabinetTableName} SET itemDisplayName = ? WHERE UCID = ?`, [data.displayName, data.UCID], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({ error: 'Database update failed'});
            return;
        }
        res.json({ success: true, id: results.insertId});
    })
})

app.post('/api/data/update/cabinet/itemamount', (req, res)=>{
    const data = req.body;
    const cabinetCode = data.cabinetCode;
    const cabinetTableName = `cabinet${cabinetCode}`

    if (!(data.cabinetCode).isInteger()){
        console.error("Provided cabinet code is not an integer.");
        res.status(500).json({error: 'Provided cabinet code is not an integer.'})
        return;
    }

    connection.query(`UPDATE ${cabinetTableName} SET itemAmount = ? WHERE UCID = ?`, [data.amount, data.UCID], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({error: 'Database update failed'});
            return;
        }
        res.json({ success: true, id:results.insertId});
    })
})

app.post('/api/data/update/cabinet/itemexpirationdate', (req,res)=>{
    const data = req.body;
    const cabinetCode = data.cabinetCode;
    const cabinetTableName = `cabinet${cabinetCode}`

    if (!(data.cabinetCode).isInteger()){
        console.error("Provided cabinet code is not an integer.");
        res.status(500).json({error: 'Provided cabinet code is not an integer.'})
        return;
    }

    connection.query(`UPDATE ${cabinetTableName} SET itemExpirationDate = ? WHERE UCID = ?`, [data.expirationDate, data.UCID], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({error: 'Database update failed'});
            return;
        }
        res.json({ success: true, id:results.insertId});
    })
})

//DELETION CODE:


//CREATION CODE:

//SHUTDOWN CODE:

process.on('SIGINT', ()=>{
    connection.end();
    process.exit(0);
})


