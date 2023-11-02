const connection = require('../database/connect');

exports.getLastMessage=(phone,callback)=>{
    let req="select *from message where createdAt=? order by created_at limit 1"

    connection.query(req,[phone],(error,results)=> {
        if(error) console.log(error)
        callback({message:results[0]});

    })
}