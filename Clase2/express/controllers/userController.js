const path = require('path');


const userDownload = (req, resp) => {
    resp.download(path.join(__dirname, '..', '/public/files/descarga.txt')); //index fui movido cuando incorporamos palntillas
};

const userHome = (req, resp) => {
    console.log(__dirname);
    resp.sendFile(path.join(__dirname, '..', 'public/index.html'));
};

const userSave = (req, resp) => {
    const nombre = req.body.nombre;
    resp.status(201).send("Guardado: " + nombre);
};

const userForm = (req, resp) => {
    const { nombre, apellido, email } = req.body;

    console.log(req.body);
    console.log("Nombre: " + nombre);
    console.log("Apellido: " + apellido);
    console.log("Email: " + email);

    resp.json({
        Nombre: nombre,
        Apellido: apellido,
        Email: email
    });
};

const userDelete = (req, resp) => {
    console.log("User deleted");
};

const userUpdate = (req, resp) => {
    console.log("Update user");
};

const userTemplate = (req, resp) => {
    let name = "Juan";
    resp.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TestTemplate </title>
    </head>
    <body>
        Template:  ${name}
    </body>

    `);
};

const userLogin = (req, resp) => {
    resp.send(`
    <form>
    <p>InputGen</p>

    </form>
    `);
};

const userWelcome = (req, resp) =>{
    resp.render('index');
};



module.exports = { userDownload, userHome, userSave, userForm, userDelete, userUpdate, userTemplate, userWelcome };