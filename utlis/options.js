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

exports.getReclamation=(phone,callback) => {

    let text =`Merci de nous partager vos coordoonées. Vous serez contacter dans les plus brefs délais par l'equipe en charge, pour vous apporter l'aide nécessaire.`
    getLang(phone,({lang}) => {
        if(lang === "ar") {
            text=`شكرًا لمشاركتكم معلومات الاتصال الخاصة بكم. سيتم التواصل معكم في أقرب وقت من قبل الفريق`
        }
            
        return callback({text,lang})

    })
}

exports.getProduits=(lang)=>{

    let produits=["Ibis plaitinium","Magimix rouge","Magimix pré-poussé surgelé","Magimix Soft"," Ibis Bleu","Levure Jaouda Fraiche"]
    
    let rows = produits.map((produit,index) => {
        return {
          "id":`produit${index}`,
          "title": " ",
          "description": produit,
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

exports.getFaq=(lang)=>{
    let produits=["problème avec pain a croute","problème avec paine de mie","Autre probleme"]
    
    let rows = produits.map((produit,index) => {
        return {
          "id":`faq${index}`,
          "title": " ",
          "description": produit,
        }
      })

      console.log(rows)
        

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

exports.programmeLesAffre=(lang)=>{
    let produits=["S'inscrire au programme Lesaffre & Moi","Gagner des points de fidélité","consulter mon solde de points ?","Rcevoir mes cadeaux "]
    
    let rows = produits.map((produit,index) => {
        return {
          "id":`programmeLesAffre${index}`,
          "title": " ",
          "description": produit,
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