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



process.on('SIGINT', ()=>{
    connection.end();
    process.exit(0);
})


