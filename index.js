
const express=require("express")
const app=express()
const { sendMessage } =require("./utlis/send-message")
const { welcomeMessage } = require("./utlis/default")
require('dotenv').config()
const fs = require('fs');
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient({
    datasources: {
      db: {
        url: `mysql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.HOST}/${process.env.DATABASE}`,
      },
    },
  })



app.get("/",async (req,res)=>{
    const response=await prisma.lead.create({
        data:{
            phone:"212621586010",
            lang:"FR",
            profileName:"ZAKARIA MOUCHTATI"
        }
    })

    res.send("CHAT BOT LESAFFRE").status(200)
})


app.get("/leads",async (req,res)=>{

    const leads=await prisma.lead.findMany();
    res.json({"leads":leads})
})

app.post("/chat-bot",(req,res)=>{

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




// const express=require("express")
// const app=express()
// require('dotenv').config()
// var mysql      = require('mysql');

// const connection = module.exports =  mysql.createConnection({
//   host     : process.env.HOST,
//   user     : process.env.DATABASE_USER,
//   password : process.env.DATABASE_PASSWORD,
//   database : process.env.DATABASE
// });
 

// connection.connect((err) => {
//     if (err) {
//       console.error('Error connecting to MySQL database: ' + err.stack);
//       return;
//     }
//     console.log('Connected to MySQL database as ID ');
// });


// app.get("/",async (req,res)=>{
//     res.send("CHAT BOT LESAFFREcasad").status(200)
// })

// app.listen(5000,()=>console.log("App Started !"))