exports.welcomeMessage= ()=> {
    let custom = {
        "type": "interactive",
        "interactive": {
          "type": "button",
          "header": {
              "type": "text",
              "text": "Bonjour"
          },
          "body": {
              "text": "Merci de nous avoir contacté! Merci de sélectionner votre langue. \n مرحبًا ، شكرًا على تواصلك معنا! الرجاء تحديد اللغة."
          },
          "footer": {
              "text": "Veuillez sélectionner une langue."
          },
          "action": {
              "buttons": [
                  {
                      "type": "reply",
                      "reply": {
                          "id": "btn-lang-fr",
                          "title": "Français"
                      }
                  },
                  {
                      "type": "reply",
                      "reply": {
                          "id": "btn-lang-ar",
                          "title": "Arabe"
                      }
                  },
              ]
          }
        }
    }

    return custom;
}

exports.listOptions = (lang) => {

    // let body = {"fr" :"Bonjour 👋😁, que puis-je faire pour vous ? Vous pouvez opter pour les services ci-dessous :\n \n📍 Carrefour autour de moi\n📒 Recevoir le catalogue\n🖥 Visiter notre Site Web\n🛍 S'abonner à nos pages\n⚠️ Soumettre une réclamation\n📦 Être livré chez-soi\n💳 S'inscrire à notre programme de fidélité\n 🏢 Demandes d'emploi\n🕐 Horaires d'ouverture et fermeture des magasins \n 🏦Pièces à fournir pour le crédit Eléctro",
                // "ar" : "مرحبًا 👋😁، ماذا يمكنني فعله من أجلك؟ يمكنك الاختيار من بين الخدمات التالية:\n\n📍 كارفور بالقرب مني\n📒 استلام الكتالوج\n🖥 زيارة موقعنا على الويب\n🛍 الاشتراك في صفحاتنا\n⚠️ تقديم شكوى\n📦 التوصيل إلى المنزل\n💳 التسجيل في برنامج FID\n 🏢 طلبات العمل\n🕐 ساعات فتح وإغلاق المتاجر \n 🏦 المستندات المطلوبة لتقديم طلب للحصول على قرض الكترو"
    // }

    let body = {"fr" : "Bonjour 👋😁, que puis-je faire pour vous ? Veuillez appuyer sur options pour choisir l’un de nos services",
                "ar" : "مرحبًا 👋😁 ، ماذا أفعل من أجلك؟ اضغط على الخيارات لاختيار إحدى خدماتنا"
  }
    let  custom = {
        "type": "interactive",
        "interactive": {
          "type": "list",
          "header": {
            "type": "text",
            "text": lang === "ar" ? "DR BREAD" : "DR BREAD"
          },
          "body": {
            "text": lang === "ar" ?body.ar : body.fr
          },
          "footer": {
            "text": " "
          },
          "action": {
            "button": lang === "ar" ? "خيارات" :"options",
            "sections": [
              {
                "title": lang === "ar" ?  "حدد اختيارك" : "Sélectionner votre choix",
                "rows": lang === "ar" ? options.ar : options.fr
              },
            ]
          }
        }
    }
    
    return custom
}


const options ={
    "fr" :  [
        {
            id:"option1",
            title:" ",
            description : "📦 1- Passer une commande de produits"
        },
        {
            id:"option2",
            title:" ",
            description : "🍞 2- Découvrir la gamme de produits"
        },
        {
            id:"option3",
            title:" ",
            description : "🎧 3- Demander assistance ou support technique ?"
        },
        {
            id:"option4",
            title:" ",
            description : `💳 4- Programme Lesaffre & Moi`
  
        },
        {
            id:"option5",
            title:" ",
            description : "⚠️ 5- Soumettre une réclamation"
        },
        {
            id:"option6",
            title:" ",
            description : "⭐ 6- noter nos services"
        },
        {
            id:"option7",
            title:" ",
            description : "🌐 7- S'abonner pages Lesaffre ou visiter site web"
        },
        {
            id:"option8",
            title:" ",
            description : "📦 8- Devenir distributeur "
        },
    ],
    "ar" : [
        {
            id:"option1",
            title:" ",
            description : "📦 طلب المنتجات"
        },
        {
            id:"option2",
            title:" ",
            description : "🍞 اكتشاف مجموعة المنتجات"
        },
        {
            id:"option3",
            title:" ",
            description : "🎧 طلب المساعدة أو الدعم الفني؟"
        },
        {
            id:"option4",
            title:" ",
            description : `💳 "Lesaffre & Moi" برنامج`
  
        },
        {
            id:"option5",
            title:" ",
            description : "⚠️ تقديم شكوى"
        },
        {
            id:"option6",
            title:" ",
            description : "⭐ على مقياس من 1 إلى 10، كيف تقيم مستوى رضاك الشامل مع شركة Lesaffre؟ "
        },
        {
            id:"option7",
            title:" ",
            description: "🛍 الاشتراك في صفحاتنا و  زيارة موقعنا الإلكتروني"
        },
        {
            id:"option8",
            title:" ",
            description : "📦الانضمام كموزع "
        },
      ]
  } 

exports.buttonMenu= (lang) => {
    let custom = {
        "type": "interactive",
        "interactive": {
          "type": "button",
          "body": {
              "text":lang === "ar" ? "للعودة إلى القائمة، انقر أدناه" : "Veuillez appuyer ci-dessous pour revenir au menu principal !"
          },
          // "footer": {
          //     "text": " "
          // },
          "action": {
              "buttons": [
                  {
                      "type": "reply",
                      "reply": {
                          "id": "menu-default",
                          "title":lang === "ar" ? "القائمة" : "Menu"
                      }
                  },
              ]
          }
      }
    }
  
    return custom
  }
  