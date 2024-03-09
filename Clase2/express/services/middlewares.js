//Middlewares
//ES6
const Middleware = (req, resp, next) => {
    console.log("From middleware");

    next();
}
//ES5
function encryptMD(req, resp, next){
    console.log("ES5 Encrypt middleware");

    next();
}

module.exports = {
    Middleware,
    encryptMD
};