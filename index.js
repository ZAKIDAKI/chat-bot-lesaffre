const express = require("express");
const app = express();
const { sendMessage, saveResponne } = require("./utlis/send-message");
const { welcomeMessage, listOptions, buttonMenu } = require("./utlis/default");
require("dotenv").config();
const fs = require("fs");
const { saveLeads, getLang } = require("./controller/lead");
const {
  getOrder,
  getProduits,
  getFaq,
  programmeLesAffre,
  visitWebSite,
  getReclamation,
} = require("./utlis/options");
const { getProducts, getOneProduct } = require("./controller/product");
const { ranting, getRating } = require("./utlis/ranting");
const { getLastMessage } = require("./utlis/messages");
app.use(express.json());

app.get("/leads", async (req, res) => {
  const leads = await prisma.lead.findMany();
  res.json({ leads: leads });
});

app.post("/chat-bot", (req, res) => {
  const message = req.body;
  console.log(message);
  const option = {
    from: message.to,
    to: message.from,
    channel: "whatsapp",
  };

  getLastMessage(message.from, ({ lastMessage }) => {
    if (lastMessage.body === "option6") {
      sendMessage({
        ...option,
        message_type: "text",
        text: getRating(message.text),
      });
      backToMenu(option);
    } else if (lastMessage.body === "option5") {
      sendMessage({
        ...option,
        message_type: "text",
        text: "Merci de nous avoir contacté, un téléconseiller prendra en charge votre réclamation dans les plus brefs délais.",
      });
      backToMenu(option);
    } else {
      switch (message.message_type) {
        case "reply":
          let { id, title, description } = message?.reply;
          if (id.includes("btn-lang-fr")) {
            saveLeads({
              profileName: message.profile.name,
              from: message.from,
            });
            sendMessage({
              ...option,
              message_type: "custom",
              custom: listOptions("fr"),
            });
          } else if (id.includes("btn-lang-ar")) {
            saveLeads({
              profileName: message.profile.name,
              from: message.from,
              lang: "ar",
            });
            sendMessage({
              ...option,
              message_type: "custom",
              custom: listOptions("ar"),
            });
          } else if (id.includes("menu-default")) {
            getLang(message.from, ({ lang }) => {
              sendMessage({
                ...option,
                message_type: "custom",
                custom: listOptions(lang),
              });
            });
          } else if (id.includes("product")) {
            let productId = id.replace("product", "");
            getOneProduct(productId, ({ product }) => {
              sendMessage({
                ...option,
                message_type: "text",
                text: product.description,
              });
            });

            backToMenu(option);
          } else if (id.includes("option")) {
            let step = id.replace("option", "");
            console.log(step);
            switch (step) {
              case "1":
                getOrder(message.from, ({ text, lang }) => {
                  sendMessage({ ...option, message_type: "text", text: text });
                });
                backToMenu(option);
                break;
              case "2":
                getProducts(({ products }) => {
                  sendMessage({
                    ...option,
                    message_type: "custom",
                    custom: getProduits(products),
                  });
                });
                // backToMenu(option)
                break;
              case "3":
                getLang(message.from, ({ lang }) => {
                  sendMessage({
                    ...option,
                    message_type: "custom",
                    custom: getFaq(lang),
                  });
                });
                break;
              case "4":
                getLang(message.from, ({ lang }) => {
                  sendMessage({
                    ...option,
                    message_type: "custom",
                    custom: programmeLesAffre(lang),
                  });
                });
                backToMenu(option);
                break;
              case "5":
                getReclamation(message.from, ({ text, lang }) => {
                  sendMessage({ ...option, message_type: "text", text: text });
                });
                break;
              case "6":
                ranting(message.from, ({ text }) => {
                  sendMessage({ ...option, message_type: "text", text: text });
                });
                break;
              case "7":
                visitWebSite(message.from, ({ text, lang }) => {
                  sendMessage({ ...option, message_type: "text", text: text });
                });
                backToMenu(option);
                break;
              case "8":
                sendMessage({
                  ...option,
                  message_type: "text",
                  text: "Merci de nous fournir votre ville ",
                });
                break;
              case "9":
                sendMessage({
                  ...option,
                  message_type: "text",
                  text: "Siege social : Fes",
                });
                break;

              default:
                break;
            }
          }
          break;

        default:
          sendMessage({
            ...option,
            message_type: "custom",
            custom: welcomeMessage(),
          });
          break;
      }
    }
  });

  if (message.message_type === "reply") {
    let { id, title, description } = message?.reply;
    saveResponne({
      message_id: message.id,
      from: message.from,
      to: message.to,
      type: message.message_type,
      body: id,
    });
  } else if (message.message_type === "text") {
    saveResponne({
      message_id: message.id,
      from: message.from,
      to: message.to,
      type: message.message_type,
      body: message.text,
    });
  }
  // message_id,from,to,type

  res.status(200).end();
});

app.listen(5000, () => console.log("App Started !"));

function logToFile(message) {
  const logFileName = "app.log";
  const logMessage = `${new Date().toISOString()}: ${message}\n`;

  fs.appendFile(logFileName, logMessage, (err) => {
    if (err) {
      console.error(`Error writing to the log file: ${err}`);
    } else {
      console.log(`Log written to ${logFileName}: ${logMessage}`);
    }
  });
}

const backToMenu = (option) => {
  setTimeout(() => {
    sendMessage({
      ...option,
      message_type: "custom",
      custom: buttonMenu("fr"),
    });
  }, 2500);
};
