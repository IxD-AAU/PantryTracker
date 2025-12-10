import mysql from 'mysql2';
import cors from 'cors';
import express from 'express';

import { getID, getUser, getFood, getHousehold, getCabinet, getHouesholdCabinetIndex, getRecipe, getNotes, getAllNotes, getAllCabinets } from './Modules/getter.mjs';

import { addUser, addFood, addCabinet, addHousehold, addHouseholdCabinetIndex, addNote } from './Modules/insert.mjs';

import { updateUser, updateFood, updateHouseHold, updateRecipe, updateCabinet, updateHouseHoldCabinetIndex, updateNoteIndex } from './Modules/update.mjs';

import { delUser, delFood, delHouseHold, delRecipe, delCabinet, delHouseHoldIndex, delNotes } from './Modules/delete.mjs';

import { createCabinet, createHouseIndex, createNoteIndex, migrateNoteIndex } from './Modules/create.mjs';

const app = express();
const PORT = 3000;

app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET','POST','PUT','DELETE'],
    credentials: true
}));

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
    
    // Auto-migrate existing noteIndex tables to add parentId column
    connection.query("SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME LIKE 'noteIndex%'", (err, tables) => {
        if (err) {
            console.error('Error checking for noteIndex tables:', err);
            return;
        }
        
        tables.forEach(table => {
            const tableName = table.TABLE_NAME;
            connection.query(`SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME='${tableName}' AND COLUMN_NAME='parentId'`, (checkErr, columns) => {
                if (checkErr) {
                    console.error(`Error checking ${tableName}:`, checkErr);
                    return;
                }
                
                if (columns.length === 0) {
                    console.log(`Adding parentId column to ${tableName}...`);
                    connection.query(`ALTER TABLE ${tableName} ADD COLUMN parentId INT NULL`, (alterErr) => {
                        if (alterErr) {
                            console.error(`Error altering ${tableName}:`, alterErr);
                        } else {
                            console.log(`✓ Successfully added parentId column to ${tableName}`);
                        }
                    });
                }
            });
        });
    });
});

app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.send('Welcome to Pantry Tracker API');
});

app.get('/api/debug/notes/:householdId', (req, res) => {
    const householdId = req.params.householdId;
    const index = `noteIndex${householdId}`;
    
    connection.query(`SELECT * FROM ${index}`, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Debug query failed', details: err.message });
            return;
        }
        res.json({
            table: index,
            rowCount: results.length,
            columns: results.length > 0 ? Object.keys(results[0]) : [],
            rows: results
        });
    });
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

app.use(getID(connection, "foodName"));

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

app.use(getHousehold(connection, "householdmember6"));

    //Getter code for Cabinets
app.use(getCabinet(connection, "itemdisplayname"));

app.use(getCabinet(connection, "itemamount"));

app.use(getCabinet(connection, "itemexpirationdate"));

app.use(getCabinet(connection, "everything"))

    //Getter code for Household Cabinet Index
app.use(getHouesholdCabinetIndex(connection, "DisplayName"));

app.use(getHouesholdCabinetIndex(connection, "cabinetCode"));

app.use(getHouesholdCabinetIndex(connection, "cabinetTYpe"));

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

app.use(updateHouseHoldCabinetIndex(connection, "DisplayName"));

app.use(updateHouseHoldCabinetIndex(connection, "cabinetType"));
//DELETION CODE:

app.use(delUser(connection));

app.use(delFood(connection));

app.use(delHouseHold(connection));

app.use(delRecipe(connection));

app.use(delCabinet(connection, "Entry"));

app.use(delCabinet(connection, "Whole"));

app.use(delHouseHoldIndex(connection, "Entry"));

app.use(delHouseHoldIndex(connection, "Whole"));

app.use(delNotes(connection, "Entry"));

app.use(delNotes(connection, "Whole"));

//CREATION CODE:

app.use(createCabinet(connection));

app.use(createHouseIndex(connection));

app.use(createNoteIndex(connection));

app.use(migrateNoteIndex(connection));

//NOTE/GROCERY LIST CODE:

app.use(addNote(connection));

app.use(getNotes(connection, "Amount"));

app.use(getNotes(connection, "Text"));

app.use(getAllNotes(connection));
app.use(getAllCabinets(connection));

app.use(updateNoteIndex(connection, "Amount"));

app.use(updateNoteIndex(connection, "Text"));

//SHUTDOWN CODE:

process.on('SIGINT', ()=>{
    connection.end();
    process.exit(0);
})

