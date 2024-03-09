const app = require('./index.js');
const dotEnv = require('dotenv');

dotEnv.config();

PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () =>{
    console.log(`Server Up in http://localhost:${PORT}`);
});


