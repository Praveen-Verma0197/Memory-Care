const mongoose = require('mongoose')
mongoose.connect(process.env.DB,{useNewUrlParser:true},(err)=>{
    if(!err) console.log('Connection created')
    else console.log('Error while connected to database'+err)
})
