const fs=require('fs');
const path = require('path')
var readConsole = require('readline').createInterface(
  {
    input:process.stdin,
    output:process.stdout
  }
)

let argv = process.argv.slice(2);
/*
console.time()
console.timeEnd()*

node test cp test.js file.js
if(cp == null)

*/
let questions=[
  "what is your name",
  "how old are you",
  "where do you leave",
]
let response=[]
const counter =0;


const hasHeans=new Promise ((resolve,reject)=>{
    if(response[counter]){

      resolve(`he just said ${response[counter]}`)
    }else{
      reject("he has not answered")
    }
});
const hasAns = ()=>{
  hasHeans.then((reply)=>{
    console.log(reply)
    counter++;
    questionairre()
  }).catch((err)=>{
    console.log("promise failed")
  })

}

function Askanother (){
  readConsole.question(questions[counter],(res)=>{
    response.push(res)
    readConsole.close()
  })
}

const  questionairre = async ()=>{
  Askanother()
  await hasAns()

}

questionairre();