
const getRate = require('../services/rate');


module.exports = async function rate(req, res){
    const result = await getRate('UAH');
    if (result.status === "fail") {
        res.status(400).send("Invalid status value");
        return;
      }
    res.header('Content-Type','application/json').status(200).send(result.value)    
}

