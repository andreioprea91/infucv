if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}


const express = require("express");
const app = express();
const exphbs  = require('express-handlebars');
const indexRouter=require('./routes/index')
const questionsRouter=require('./routes/questions')
const mongoose=require('mongoose')
const bodyParser= require('body-parser')

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true })); 
app.use('/', indexRouter)
app.use('/questions', questionsRouter)


mongoose.connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true})
    const db=mongoose.connection
    db.on('error', error=>console.error(error))
    db.once('open', ()=>console.log('Connected to Mongoose'))

app.listen(process.env.PORT || 3000);