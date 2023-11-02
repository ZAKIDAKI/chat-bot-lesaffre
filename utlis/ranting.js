const { getLang } = require("../controller/lead")

exports.ranting=(phone,callback)=>{
    let text=" Sur une echelle de 1 a 10 comment evalueriez vous votre niveau de satisfaction globale avec Lesaffre"
    getLang(phone,({lang})=>{

    if(lang === "5"){
        text="على مقياس من 1 إلى 10، كيف تقيم مستوى رضاك العام مع ليزافر؟"
    }

        return callback({text})

    })

}