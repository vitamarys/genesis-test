const Router = require('express');
const router =  Router();

const addEmail = require('../controllers/subController');
router.post('/', (req, res)=>{
    addEmail(req, res)

 
});

module.exports = router;


