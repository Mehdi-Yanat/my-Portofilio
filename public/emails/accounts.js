const mailgun = require("mailgun-js");
const DOMAIN = 'sandbox5dc08cd74d804b5785fd43ca2e5a987a.mailgun.org';
const mg = mailgun({apiKey: "key-c57826aefbb793e03dc4d101c7e7582b", domain: DOMAIN});


const sendMail = (Email , Name , Message , cb)=> {
    const data = {
        from: Email,
        to: 'hamar3106@gmail.com',
        subject: Name,
        text: Message ,
        required:true
    };
    mg.messages().send(data, function (error, Data) {
        if (error) {
            console.log(error);
            cb(error , null , "error")
        }else{
            console.log(Data);
            cb(Data , "email sent !")
        }
    });
}



module.exports = sendMail