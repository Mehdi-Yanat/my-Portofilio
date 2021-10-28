const mailgun = require("mailgun-js");
const DOMAIN = 'sandbox5dc08cd74d804b5785fd43ca2e5a987a.mailgun.org';
const mg = mailgun({apiKey: "key-c57826aefbb793e03dc4d101c7e7582b", domain: DOMAIN});


const sendMail = (Email , Name , Message , cb)=> {
    const data = {
        from: Email,
        to: 'hamar3106@gmail.com',
        subject: Name,
        text: Message
    };
    mg.messages().send(data, function (error, body) {
        if (error) {
            cb(error , null , "error")
        }else{
        console.log(body);
        }
    });
}



module.exports = sendMail