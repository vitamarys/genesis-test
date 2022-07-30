const Router = require('express');
const router =  Router();

const sendEmails = require('../controllers/sendEmailsContoller');
router.post('/', (req, res)=>{
    sendEmails(req, res)

 
});

module.exports = router;


