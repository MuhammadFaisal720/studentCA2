const express = require('express')
const StudentProfile = require('../models/profile')
const router = express.Router()

// Create Profile api
router.post('/studentprofile', async(req, res)=>{
  try{
    let profile = new StudentProfile({
      ...req.body
    }) 
  const stuProfile = await profile.save()   
  res.status(200).send({msg: 'Student Profile Successfully' ,stuProfile}) 
  }catch(e){
       res.status(400).send(e,{error: "Field will not be empty" })
  }
})


// Get Profiles api 
router.get('/allprofile', async(req, res)=>{
  try{
  const stu = await StudentProfile.find()
  res.status(200).send(stu) 
  }catch(e){
    res.status(400).send(e)
  }
})

// Delete Profile api 
router.post('/studentprofile/:id', async(req, res)=>{
  try{
  await StudentProfile.findByIdAndDelete(req.params.id)   
  res.status(200).send({msg: 'Student Profile Deleted Successfully'}) 
  }catch(e){
    res.status(400).send(e)
  }
})

// Edit Profile api 
router.post('/studentprofile/edit/:id', async(req, res)=>{
  
    const updates = Object.keys(req.body)
    
    //Allowed Fields
    const allowedUpdates =["firstname", "lastname", "DOB", "SSID", "Degree", "University"]
    
    const isValidOperation = updates.every((update)=> allowedUpdates.includes(update))
    if(!isValidOperation){
      return res.status(404).send({error: 'Invalid updates' })
    }

  try{
    
    const stuProfile = await StudentProfile.findByIdAndUpdate({_id: req.params.id}, req.body )

  res.status(200).send({msg: 'Student Profile Modilfied Successfully' ,stuProfile}) 
  }catch(e){
    res.status(400).send(e)
  }
})

module.exports = router