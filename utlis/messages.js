const connection = require('../database/connect');

exports.getLastMessage=(phone,callback)=>{
    let req="select *from message where `from`=? order by createdAt limit 1"

    connection.query(req,[phone],(error,results)=> {
        if(error) console.log(error)
        callback({lastMessage:results[0]});

    })
}