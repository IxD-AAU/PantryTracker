const express = require('express');


const app = express();



app.use(express.static('<path to your angular app>'));


app.get('/api/hello', (req, res) => {
    res.send({ message: 'Hello World!'});
   });

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000!');
});