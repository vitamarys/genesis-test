const axios = require('axios');

module.exports = async function getRate(currency){
    try{
        const response = await axios.get(`https://api.coinbase.com/v2/prices/spot?currency=${currency}`);
        
        return {
            value: response.data.data.amount,
            status: 'success'
        };
    } catch (err){

        return {status: 'fail'};
    }
}

