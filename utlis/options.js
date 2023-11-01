const { getLang } = require("../controller/lead");

exports.getOrder=(phone,callback) => {

    let text =`Notre responsable commercial prendra contact avec vous dans les plus proches délais. Merci et à très bientôt!`
    getLang(phone,({lang}) => {
        if(lang === "ar") {
            text=`سيتصل بك مدير مبيعاتنا في أقرب وقت. شكرًا ونراك قريبًا!`
        }
            
        return callback({text,lang})

    })
}