const multer  = require('multer');


module.exports = function middleware(app, express){
    const upload = multer();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(upload.none());
}


