import mysql from 'mysql2';

import express from 'express';

import { getID, getUser, getFood, getHousehold, getCabinet, getHouesholdCabinetIndex, getRecipe } from './Modules/getter.mjs';

import { addUser, addFood, addCabinet, addHousehold, addHouseholdCabinetIndex } from './Modules/insert.mjs';

import { updateUser, updateFood, updateHouseHold, updateRecipe, updateCabinet } from './Modules/update.mjs';

import { delUser, delFood, delHouseHold, delRecipe, delCabinet, delHouseHoldIndex } from './Modules/delete.mjs';

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
app.use(getID(connection,"user"));

app.use(getID(connection,"food"));

app.use(getID(connection, "household1"));

app.use(getID(connection, "household2"));

app.use(getID(connection, "household3"));

app.use(getID(connection, "household4"));

app.use(getID(connection, "household5"));

app.use(getID(connection, "household6"));

    // Getting User Info based on ID
app.use(getUser(connection, "firstname"));

app.use(getUser(connection, "lastname"));

app.use(getUser(connection, "username"));

app.use(getUser(connection, "accesscode"));

app.use(getUser(connection, "email"));


    //Getting Food Info based on ID:
app.use(getFood(connection, "barcode"));

app.use(getFood(connection, "displayname"));

    //Getting HouseHold Info based on ID:
app.use(getHousehold(connection, "displayname"));

app.use(getHousehold(connection, "invitecode"));

app.use(getHousehold(connection, "householdmember1"));

app.use(getHousehold(connection, "householdmember2"));

app.use(getHousehold(connection, "householdmember3"));

app.use(getHousehold(connection, "householdmember4"));

app.use(getHousehold(connection, "householdmember5"));

app.use(getHousehold(connection, "householdmember6"));z

    //Getter code for Cabinets
app.use(getCabinet(connection, "itemdisplayname"));

app.use(getCabinet(connection, "itemamount"));

app.use(getCabinet(connection, "itemexpirationdate"));

    //Getter code for Household Cabinet Index
app.use(getHouesholdCabinetIndex(connection, "DisplayName"));

app.use(getHouesholdCabinetIndex(connection, "cabinetCode"));

    //Getter code for recipe
app.use(getRecipe(connection, "displayname"));

app.use(getRecipe(connection, "link"));

//INSERTION CODE:
app.use(addUser(connection));

app.use(addFood(connection));

app.use(addHousehold(connection));

app.use(addCabinet(connection));

app.use(addHouseholdCabinetIndex(connection));

//UPDATE CODE:
app.use(updateUser(connection,"FirstName"));

app.use(updateUser(connection,"LastName"));

app.use(updateUser(connection,"UserName"));

app.use(updateUser(connection,"AccessCode"));

app.use(updateUser(connection,"UserEmail"));

app.use(updateFood(connection,"DisplayName"));

app.use(updateFood(connection,"BarCode"));

app.use(updateHouseHold(connection,"DisplayName"));

app.use(updateHouseHold(connection,"InviteCode"));

app.use(updateHouseHold(connection,"HouseHoldM1"));

app.use(updateHouseHold(connection,"HouseHoldM2"));

app.use(updateHouseHold(connection,"HouseHoldM3"));

app.use(updateHouseHold(connection,"HouseHoldM4"));

app.use(updateHouseHold(connection,"HouseHoldM5"));

app.use(updateHouseHold(connection,"HouseHoldM6"));

app.use(updateRecipe(connection,"DisplayName"));

app.use(updateRecipe(connection,"RecipeLink"));

app.use(updateCabinet(connection,"itemdisplayname"));

app.use(updateCabinet(connection,"itemamount"));

app.use(updateCabinet(connection,"itemexpirationdate"));
//DELETION CODE:

app.use(delUser(connection));

app.use(delFood(connection));

app.use(delHouseHold(connection));

app.use(delRecipe(connection));

app.use(delCabinet(connection, "Entry"));

app.use(delCabinet(connection, "Whole"));

app.use(delHouseHoldIndex(connection, "Entry"));

app.use(delHouseHoldIndex(connection, "Whole"));

//CREATION CODE:

app.post('/api/data/create/cabinet', (req, res)=>{
    const data = req.body;
    const cabinetCode = data.cabinetCode;
    const cabinetTableName = `cabinet${cabinetCode}`;

    connection.query(`CREATE TABLE ${cabinetTableName} (UCID INT NULL AUTO_INCREMENT, itemDisplayName VARCHAR(90) NOT NULL, itemAmount INT NOT NULL, itemExpirationDate DATE NOT NULL, PRIMARY KEY (UCID));`, (err,results)=>{
        if(err){
            console.error(err);
            res.status(500).json({error: 'Database creation failed'});
            return;
        }
        res.json({ success: true, id: results.insertId});
    })
})

app.post('/api/data/create/housecabinetindex', (Req, res)=>{
    const data = req.body;
    const index = `household${data.UHCIID}`;

    connection.query(`CREATE TABLE ${index} (UHCIID INT NULL AUTO_INCREMENT, cabinetCode VARCHAR(45) NOT NULL, PRIMARY KEY (UHCIID));`, (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({error: 'Database creation failed'});
            return;
        }
        res.json({ success: true, id: results.insertId});
    })
})


//SHUTDOWN CODE:

process.on('SIGINT', ()=>{
    connection.end();
    process.exit(0);
})

