const mongoose = require('mongoose')
const validator = require('validator')

const studnetProfileSchmea  = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim : true
    },

  lastname: {
    type: String,
    required: true,
    trim : true,
  },
  DOB: {
    type: Date,
    required: true
  },
  SSID:{
    type: String,
    required: true,
    trim : true
  },
  Degree:{
    type: String,
    required: true,
    trim : true
  },
  University:{
    type: String,
    required: true,
    trim : true
  }

})

const studentprofile = mongoose.model('StudentProfile', studnetProfileSchmea)
module.exports = studentprofile;
