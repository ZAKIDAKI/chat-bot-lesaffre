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

exports.getProduits=(lang)=>{

    let produits=["Ibis plaitinium","Magimix rouge","Magimix pré-poussé surgelé","Magimix Soft"," Ibis Bleu","Levure Jaouda Fraiche"]
    
    let rows = produits.map((produit,index) => {
        return {
          "id":`produit${index}`,
          "title":produit,
          "description":" ",
        }
      })
        

    let custom={
        "type": "interactive",
        "interactive": {
          "type": "list",
          "header": {
            "type": "text",
            "text": lang === "ar" ? "DR BREAD" : "DR BREAD"
          },
          "body": {
            "text":lang === "ar" ? "الرجاء اختيار واحدة من علاماتنا التجارية" : "Veuillez sélectionner l’une de nos enseignes"
          },
          "action": {
            "button": lang === "ar" ? "خيارات" :"Options",
            "sections": [
              {
                    "title": lang === "ar" ? "اختار:" :"Choisir:",
                    "rows": rows
                  },
                ]
              }
            }
    }
    return custom
}