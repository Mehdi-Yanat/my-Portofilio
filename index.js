const express = require('express')
const path = require('path')
const sendMail = require('./public/emails/accounts')
const app = express()
const directory = path.join(__dirname ,'/public')

const port = process.env.PORT || 3000

app.set('view engine' , "hbs")
app.use(express.static(directory))


app.get('/' , (req , res) => {
    res.render("index")
})
app.get('/About' , (req , res) => {
    res.render("About")
})
/*---- send grid ----*/
app.use(express.urlencoded({
    extended:false
}))
app.use(express.json());

app.post('/email' , (req , res) => {
    //console.log(req.body);
    const {Email , Name , Message} = req.body
    sendMail(Email , Name ,Message , function (err , Data) {
        if (err) {
            res.send({"message":"The Request Failed"} )
            console.log(err);
            return
        }else{
            res.send(Data)    
            console.log(Data);
            return
        }
        
        
    })
})
app.get('/Contact' , (req , res) => {
    res.render("Contact")
})

app.get('/Projects' , (req , res) => {
    res.render("Projects")
})

app.get('*' , (req , res) => {
    res.render('404')
})






app.listen(port , ()=> {
    console.log("server started at " + port);
})