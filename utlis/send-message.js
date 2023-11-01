const axios = require('axios');

exports.sendMessage=(data)=>{
    const apiKey = '39d56766';
    const apiSecret = '2JSqVXHtN3xaJ1ql';

    const config = {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        auth: {
            username: apiKey,
            password: apiSecret,
        },
    };
    axios.post('https://messages-sandbox.nexmo.com/v1/messages', data, config)
    .then((response) => {
    //    console.log(response)
    })
    .catch((error) => {
        console.error(error);
    });
}