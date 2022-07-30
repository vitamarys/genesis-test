const mailSender = require('./mailSender');
const readline = require('readline'); 
const getRate = require('./rate')
const fs = require('fs')
const db = './db.txt';

 async function sendEmail(){
    const readStream = fs.createReadStream(db,"utf8");
    
    const emailsArr = [];
    const lines = readline.createInterface({ input: readStream, crlfDelay: Infinity });
  
    for await (const line of lines) {
       emailsArr.push(line)
     
      
      }
    
    readStream.close();
    const rate = await getRate('UAH');
    
    if(rate.status === 'success'){
        mailSender(emailsArr, rate.value)
        return true
    }
    
}

module.exports = sendEmail;