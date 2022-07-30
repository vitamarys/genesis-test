const sendEmail = require('../services/sendEmail')


module.exports = async function sendEmails(req, res){
   const result =  await sendEmail()
   if(result === true){
       res.header('Content-Type','application/json').status(200).send('E-mailʼи відправлено')
   }else{
       res.header('Content-Type','application/json').status(409).send('E-mailʼ не відправлено')
   }

  
}

