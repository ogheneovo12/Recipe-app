const express = require('express');
const path = require('path');
const app=express();
const PORT = process.env.PORT || 5000;
const exphbs  = require('express-handlebars');
const eventEmitter = require('events')
const event = new eventEmitter()

const members = require('./Module/Members.js')

//Recipe
const recipe =[
  {
    url:'img/1.png',
   name:'egusi'
  },
  {
url:'img/fd.png',
   name:'yam'


  },
  {
url:'img/2.png',
   name:'beans'


  }


  ]






app.disable('x-powered-by');
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



app.get('/recipes',(req,res)=>res.render('getRecipe',{
title:'Recipe App',
recipe
}))

//static file for rendering html files
app.use(express.static(path.join(__dirname,'public')))


app.use('/api/members/',require('./Module/Router/member.js'));

app.listen(PORT,()=>console.log("express is running"))


event.on('start',()=>{


          console.log("hello")

     })
app.get('/event',()=>event.emit('start'))

app.get('/headers',  function(req,res){         res.set('Content-Type','text/plain');
    var  s  =  '';
   for(var  name  in  req.headers)
    s  +=  name  +  ': ' +req.headers[name]  +  '\n';
     res.send(s); });