 const newEmail = require('../services/addEmail')


 module.exports = async function addEmail(req, res){
    const result =  await newEmail(req.body.email)
    if(result === true){
        res.header('Content-Type','application/json').status(200).send('E-mail додано')
    }else{
        res.header('Content-Type','application/json').status(409).send('E-mail вже є в базі')
    }

   
}

