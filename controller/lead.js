var connection = require('../database/connect');

exports.saveLeads = (lead) => {
    
    let {profileName,from,lang = "fr"} = lead

    let req=" INSERT INTO `lead` (`profile_name`, `phone`, `lang`) values (?,?,?) "
   
    connection.query(req,[profileName,from,lang],(errros,results) => {
        if(errros) console.log(errros)
    })
}

exports.getLang = (phone,callback) => {
    let req= "select lang from lead where phone = ? ORDER BY id DESC LIMIT 1"

    connection.query(req,phone,(error,results) => {
        if(error) console.log(error)
        callback(results[0])

    })
}