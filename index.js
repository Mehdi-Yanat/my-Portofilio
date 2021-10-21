const express = require('express')
const path = require('path')

const app = express()
const directory = path.join(__dirname ,'/public')

const port = process.env.PORT || 5500

app.set('view engine' , "hbs")
app.use(express.static(directory))


app.get('' , (req , res) => {
    res.render("index")
})
app.get('/About' , (req , res) => {
    res.render("About")
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