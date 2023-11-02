const axios = require('axios');
require("dotenv").config()
const connection = require('../database/connect');
const { buttonMenu } = require('./default');


exports.sendMessage=(data)=>{
    const config = {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + process.env.ACCESS_TOKEN
        }
    };
    axios.post('https://api.nexmo.com/v1/messages', data, config)
    .then((response) => {
        this.saveResponne({message_id : response.data.message_uuid,from:data.from,to:data.to,type:data.message_type})
    })
    .catch((error) => {
        console.error(error);
    });
}

exports.saveResponne=(response) => {

    let {message_id,from,to,type} = response;

    let req = "INSERT into message (`message_id`, `to`, `from`, `type`) values (?,?,?,?)"  
    connection.query(req,[message_id,from,to,type],(error,results)=> {
        if(error) console.log(error)
    })
}
