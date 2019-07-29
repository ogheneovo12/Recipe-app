const fs=require('fs');
const path =require('path')

const date =new Date();
const input = process.argv.slice(2).join(" ");

const note =`
\tDate\t\t\t\tMessage\n${date}:${input}\n
`;
  fs.appendFile('backup.txt',note,(err)=>{
    if(err){
      console.log(err)
    }else{
      console.log(note)
    }
  })

