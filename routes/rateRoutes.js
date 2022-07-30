const Router = require('express');
const router =  Router();
const rate = require('../controllers/rateContoller')
router.get('/', (req, res)=>{
    rate(req, res)
});

module.exports = router;


