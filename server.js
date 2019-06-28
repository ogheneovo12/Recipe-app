const express = require('express');
const path = require('path');
const app=express();
const PORT = process.env.PORT || 5000;
const exphbs  = require('express-handlebars');
const eventEmitter = require('events')
const event = new eventEmitter()

const members = require('./Module/Members.js')


//configure handlebar
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));



app.use(express.json())
app.use(express.urlencoded({extended:false}))



app.get('/',(req,res)=>res.render('index',{
title:'Recipe App',
members
}))

//static file for rendering html files
app.use(express.static(path.join(__dirname,'public')))


app.use('/api/members/',require('./Module/Router/member.js'));

app.listen(PORT,()=>console.log("express is running"))


event.on('start',()=>{


            console.log("hello")


     })
app.get('/event',()=>event.emit('start'))
