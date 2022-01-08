const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Message = require('./models/message'); 
const app = express();
app.use(express.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost:27017/portfolio', {
    useNewUrlParser: true,
   // useCreateIndex: true,
    useUnifiedTopology: true
});
app.use(express.static(__dirname + '/public'));
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection erroring:"));
db.once("open", () => {
    console.log("Database connected");
});
app.get('/',(req,res)=>{
    res.render('index.ejs');
})
app.post('/',async(req,res)=>{
    const message=new Message(req.body);
    await message.save();
    const temp=true;
   // res.send(req.body);
   console.log("huerr");
   res.render('index.ejs');
});
app.listen(3000, () => {
    console.log('Serving on port 3000')
})