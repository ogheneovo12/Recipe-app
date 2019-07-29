const DataStore = require('nedb');
const path = require('path');
const prompt = require('readline').createInterface({
	   input:process.stdin,
	   output:process.stdout
	
})
const users = new DataStore({filename:path.join(__dirname,'Db_Store/user.db')});


users.loadDatabase((error)=>{    
if(error){
	console.log('Fatal:local-database could not  be loaded' + error)
	throw  error
}



//console.log('info:database successfully loaded \n')

 }); 
 
 
 //ask user for search entry
 console.log('\t\tSEARCH USER\n')
 
 prompt.question("please enter the name of user:",(name)=>{
 	
 	users.find({name:`${name}`},(error,result)=>{
 		
 		if(error){
 			console.log('fatal:Error')
 			throw error
 		}
 		if(result.length <=0)
 		{
 			console.log('sorry user ' +name+ ' is not found')
 		}else{
 			
 		console.log(result)
 		}
 		
 	})
prompt.close()
 	
 })
 
 
 
 
 
 
 
 

let people=[];

let john ={
   name:'john',
   age:30,
   status:'active'
  }
let james ={
   name:'james',
   age:70,
   status:'offline'
  }
let peter ={
   name:'peter',
   age:10,
   status:'dontDisturb'
  }

people.push(john,james,peter);



/*users.insert(people,(err,doc)=>{
	if(!err){
	console.log('Inserted'+'withID,'+ doc._id); 
	  
	}else{
		console.log("not succesfull")
		console.log(err)
	}
	
	
})*/