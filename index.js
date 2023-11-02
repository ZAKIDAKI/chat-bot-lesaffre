
const express=require("express")
const app=express()
const { sendMessage } =require("./utlis/send-message")
const { welcomeMessage, listOptions } = require("./utlis/default")
require('dotenv').config()
const fs = require('fs');
const { saveLeads, getLang } = require("./controller/lead")
const { getOrder, getProduits, getFaq, programmeLesAffre, visitWebSite } = require("./utlis/options")
app.use(express.json())


app.get("/leads",async (req,res)=>{

    const leads=await prisma.lead.findMany();
    res.json({"leads":leads})
})

app.post("/chat-bot",(req,res)=>{
    const message = req.body
    console.log(message)
    const option= {
        "from": message.to,
        "to":  message.from,
        "channel": "whatsapp",
    }

    switch (message.message_type) {
        case "reply":
            let {id , title,description} = message?.reply
            if (id.includes('btn-lang-fr')){
                saveLeads({profileName:message.profile.name,from:message.from})
                sendMessage({...option,"message_type": "custom","custom": listOptions("fr") })

            }else if (id.includes('btn-lang-ar')) {
                saveLeads({profileName:message.profile.name,from:message.from,lang:"ar"})
                sendMessage({...option,"message_type": "custom","custom": listOptions("ar") })
            }
            else if (id.includes('option')){
                let step = id.replace('option','')
                switch (step) {
                    case "1":
                        getOrder(message.from,({text,lang}) => {
                            sendMessage({...option,"message_type": "text","text": text})
                        })
                        break;
                    case "2":
                        getLang(message.from,({lang}) => {
                            sendMessage({...option,"message_type": "custom","custom": getProduits(lang)})
                        })
                        break;
                    case "3":
                        getLang(message.from,({lang}) => {
                            sendMessage({...option,"message_type": "custom","custom": getFaq(lang)})
                        })
                        break;
                    case "4":
                        programmeLesAffre(message.from,({lang}) => {
                            sendMessage({...option,"message_type": "custom","custom": getFaq(lang)})
                        })
                        break;
                    case "5":
                        getReclamation(message.from,({text,lang}) => {
                            sendMessage({...option,"message_type": "text","text": text})
                        })
                    break;
                    case "7":
                        visitWebSite(message.from,({text,lang}) => {
                            sendMessage({...option,"message_type": "text","text": text})
                        })
                    case "8":
                        sendMessage({...option,"message_type": "text","text": "Merci de nous fournir votre ville "})
                    break;
                
                    default:
                        break;
                }
            }
            break;
    
        default:
            sendMessage({...option,"message_type": "custom","custom": welcomeMessage()})
            break;
    }

// {
//     to: '14157386102',
//     from: '212621586010',
//     channel: 'whatsapp',
//     message_uuid: '9e84f409-b8d8-41a8-86e7-fb66dd915cc6',
//     timestamp: '2023-11-01T08:17:18Z',
//     message_type: 'reply',
//     reply: { id: 'btn-lang-fr', title: 'Français' },
//     context_status: 'available',
//     context: {
//       message_from: '14157386102',
//       message_uuid: 'fd8472a0-46c3-4c3d-b0c4-c9ffb9b19fa3'
//     },
//     profile: { name: 'Zakaria MOUCHTATI' }
//   }
    
    
    res.status(200).end();
})


app.listen(5000,()=>console.log("App Started !"))



function logToFile(message) {
    const logFileName="app.log"
    const logMessage = `${new Date().toISOString()}: ${message}\n`;
  
    fs.appendFile(logFileName, logMessage, (err) => {
      if (err) {
        console.error(`Error writing to the log file: ${err}`);
      } else {
        console.log(`Log written to ${logFileName}: ${logMessage}`);
      }
    });
}
