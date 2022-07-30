const express = require('express');
const path = require('path');
const router = require('./routes/index')
const middleware = require('./middleware/saveEmailMiddleware')
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 3000
middleware(app, express);
app.get('/',(req,res)=>{
    // res.send('hell')
    res.sendFile(path.join(__dirname, '/static/index.html'));
})
app.use('/api', router);

 
app.listen(PORT)