const para = document.getElementsByClassName("app-intro")[0];

word=[
"sezzynaire4real is a boy",
"A boy is sezzynaire4real",
"We hate you",
"hahahaha coughs",
"i will eat raw",
"Hurray!!!!!!!!",
"Message From CodeZilla"

]
var i = 0, speed=100, curr=0;

function revwrite(){
 if(para.innerHTML){
      let length=[...para.innerHTML];
      length.pop()
      para.innerHTML=length.join("");
      let watch= para.innerHTML;
      if(watch.length == 0){
         curr++;
      if(curr == word.length)curr=0;
         i=0;
         setTimeout(()=>{
           Write(word[curr])},speed)
         exit(0)}
setTimeout(revwrite,speed)}}

function Write(word){

    para.innerHTML += word[i];
    i++;
    let watch= para.innerHTML;
   if(watch.length == word.length){
       setTimeout(revwrite,1000)
       exit(0)
}
setTimeout(()=>{Write(word)},speed)
}

//main call
setTimeout(()=>{Write(word[curr])},speed)