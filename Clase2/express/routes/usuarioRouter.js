const express = require('express');
const router = express.Router();
const {Middleware, encryptMD } = require('../services/middlewares.js');
const path = require('path');
const { userDownload, userHome, userSave, userForm, userDelete, userUpdate, userTemplate, userWelcome } = require('../controllers/userController.js');

router.get('/', (req, resp) => {
    //console.log(req);
    //console.log(req.url);
    //console.log(req.method);
    resp.status(200).send('Hola desde el get de expresss');

});

router.get('/index', userHome);

router.get('/download',userDownload);

router.post('/save', userSave);

router.post('/form', userForm);

router.put('/update', userUpdate);

router.delete('/delete', userDelete);

router.get('/template', userTemplate);

router.get('/welcome', userWelcome);

module.exports = router;