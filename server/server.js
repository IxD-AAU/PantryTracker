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

app.get('/api/data/get/food/expriationDate', (req, res)=>{
    const data = req.query;
    connection.query('SELECT expirationDate FROM foodtable WHERE UFID = ?',[data.UFID], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({error: 'Dataset: FOOD(expirationDate) | data retrieval failed'});
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
    connection.query('INSERT INTO foodtable (barCode, displayName, expirationDate) VALUES (?,?,?)', [data.barCode, data.displayName,data.expirationDate], (err, results) => {
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



//DELETION CODE:


//CREATION CODE:

//SHUTDOWN CODE:

process.on('SIGINT', ()=>{
    connection.end();
    process.exit(0);
})


