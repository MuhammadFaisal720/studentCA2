const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://test:test@cluster0-7hznk.mongodb.net/test?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(console.log('connected with mongodb'))