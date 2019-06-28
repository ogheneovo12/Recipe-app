const express = require('express');
const router = express.Router();
const members = require('../../Module/Members')
const uuid=require('uuid');
const fs  = require('fs')
const path =require('path');


//get all members
router.get('/',(req,res)=>res.json(members))

//get selected member by id
router.get('/:id',(req,res)=>{

//checks if member id exists
const found = members.some(member => member.id === parseInt(req.params.id))
if(found){
res.json(members.filter(member=> member.id === parseInt(req.params.id)))
}else{
  res.status(400).json({msg:`No member with the id of ${req.params.id}`})
}

})

//add new member
router.post('/add',(req,res)=>{
const newMember ={
  id:uuid.v4(),
  name:req.body.name,
  phone:req.body.phone,
  email:req.body.email

}

if(!newMember.name || !newMember.email || !newMember.phone){
  return  res.status(400).json({msg:"please fill data "})
}

members.push(newMember)
  res.redirect('/')
})

//update member
router.post('/update/:id',(req,res)=>{

//checks if member id exists
const found = members.some(member => member.id === parseInt(req.params.id))
  console.log(req.params.id)
  console.log(found)
if(found){
const updatedMember = req.body;
members.forEach(member => {
if(member.id===parseInt(req.params.id)){
  member.name = updatedMember.name?updatedMember.name:member.name;
  member.email = updatedMember.email?updatedMember.email:member.email;
  member.phone = updatedMember.phone?updatedMember.phone:member.phone;
  res.json({msg:'member updated succesfully',member})
}
})
}else{
  res.status(400).json({msg:`No member with the id of ${req.params.id}`})
}
})

//delete member
router.post('/remove/:id',(req,res)=>{
     //checks if member id exists
const found = members.some(member => member.id === parseInt(req.params.id))
if(found){
res.json({msg:'members deleted succesfully', members:members.filter(member=> member.id !== parseInt(req.params.id))})

}else{
  res.status(400).json({msg:`No member with the id of ${req.params.id}`})
}


})
module.exports = router;