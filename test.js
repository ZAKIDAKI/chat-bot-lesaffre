const axios = require("axios");
require("dotenv").config()

console.log(process.env.ACCESS_TOKEN)
const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + process.env.ACCESS_TOKEN
    }
};

let data={
    from: "212719927588",
    to: "212621586010",
    message_type: "text",
    text: "TEST TEST",
    channel: "whatsapp"
}
axios.post('https://api.nexmo.com/v1/messages', data, config)
.then((response) => {
   console.log(response)
})
.catch((error) => {
    console.error(error);
});