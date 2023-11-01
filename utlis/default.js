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