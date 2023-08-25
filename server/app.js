const express = require("express");
const mongoose = require("mongoose");
const models = require('./model/model_schema');
const cors = require('cors');

const dbUrl = "mongodb+srv://tati:tatipassword@cluster0.oqqckek.mongodb.net/news";
const port = 5000;

mongoose.connect(dbUrl)
    .then(()=> console.log("Connected to database"))
    .then(()=> app.listen(port))
    .then(()=> console.log(`server listening on port ${port}`))
    .catch(err => console.error(err))

const app = express();
app.use(cors())

app.use(express.json())

// this function will geive data to the react app 

app.get('/getNews',(req,res) => {
    models.find().sort({createdAt : -1})
    .then((result)=>{res.json(result)})
    .catch((err)=>{console.log(err)})
});
 
// this function will go through specific document

app.get('/NewsDitaile/:id', (req,res) => {
    const id = req.params.id;
    models.findById(id)
        .then((result)=>{res.json(result)})
        .catch((err)=>{console.log(err)})
});

// this functon will delete document from the data base

app.delete('/NewsDitaile/:id', (req,res) => {
    const id = req.params.id;
    models.findByIdAndDelete(id)
        .then(()=>console.log("deleted"))
        .catch((err)=>{console.log(err)})
});

// this functon will update the document

app.put('/NewsDitaile/:id', (req,res) => {
    const id = req.params.id;
    const newsModel = (req.body)
    models.findByIdAndUpdate(id, newsModel, {new : true})
        .then(()=>console.log("updeted"))
        .catch((err)=>{console.log(err)})
})
// this document will save document to the data base

app.post('/PostNews',(req,res) => {
    const newsModel = new models(req.body)
    newsModel.save()
        .then((resulet) => res.send(resulet))
        .catch((err)=>{console.log(err)})
})
