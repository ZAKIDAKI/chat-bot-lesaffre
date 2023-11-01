
const express=require("express")
const app=express()
const { sendMessage } =require("./utlis/send-message")
const { welcomeMessage } = require("./utlis/default")
require('dotenv').config()
const fs = require('fs');


app.get("/leads",async (req,res)=>{

    const leads=await prisma.lead.findMany();
    res.json({"leads":leads})
})

app.post("/chat-bot",(req,res)=>{
    console.log(req.body)
    
    const message = req.body

    const option= {
        "from":"14157386102",
        "to":  "212621586010",
        "channel": "whatsapp",
    }
    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }
    sendMessage({...option,"message_type": "custom","custom": welcomeMessage()})
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