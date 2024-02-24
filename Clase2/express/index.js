console.log("express-START");

//ES5


const express = require('express');
const app = express();

PORT = 3000;

//GET
app.get('/', (req, resp) => {
    console.log(req);
    console.log(req.url);
    console.log(req.method);
    resp.status(200).send('Hola desde el get de expresss');

});


app.get('/index', (req, resp) => {
    resp.sendFile(__dirname + '/public/pages/index.html');
});

app.get('/descarga', (req, resp) => {
    resp.download(__dirname + '/public/files/descarga.txt');
});

//POST
//app.post();

//DELETE
//app.delete();

//UPDATE
//app.put();


app.listen(PORT, () =>{
    console.log(`Server Up in http://localhost:${PORT}`);
})