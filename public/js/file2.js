const fs=require('fs');
const path = require('path')
var readConsole = require('readline').createInterface(
  {
    input:process.stdin,
    output:process.stdout
  }
)

let argv = process.argv.slice(2);
const [cmd,src,dst] = argv;
let NotValid = (src,dst,sc="false")=>{

  if(!sc){
  if(typeof(dst) == "undefined"){
    console.log(`no destination was specified after ${src}`)
    return true;
  }}

  if(typeof(src) == "undefined"){
    console.log('no files were specified');
      return true;
  }

return false;
}
let copyFile =(src,dst)=>{
  if(!NotValid(src,dst)){
  console.log(`file copied from ${src} to ${dst}`)
  }
}
let mvFile =(src,dst)=>{
 if(!NotValid(src,dst)){
 console.log(`file moved from ${src} to ${dst}`)
 }


}
let renameFile =(src,dst)=>{
if(!NotValid(src,dst)){
 console.log(`file name changed from ${src} to ${dst}`)
}
}
let delFile = (src) =>{
  if(!NotValid(src)){
 console.log(` ${src} was deleted succesfully`)
  }
}
let mkFile = (src) => {

  if(!NotValid(src)){
 console.log(`${src} was created succesfully`)
  }
}

switch(cmd){

  case "mk":
      mkFile(src,)
      process.exit();
  case "cp":
    copyFile(src,dst)
      process.exit()
  case "del":
    delFile(src)
     process.exit()
  case "mv":
    mvFile(src,dst)
     process.exit()
  case "rn":
    renameFile(src,dst)
     process.exit()
  default:
    console.log(((typeof(cmd)=='undefined')?"u didnt specify any command":`no command as ${cmd}`));
    process.exit()




}