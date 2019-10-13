const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const PORT = 4328

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

mongoose.connect('mongodb://localhost/crmreact', { useNewUrlParser: true })

const Schema = mongoose.Schema
const CrmSchema = new Schema({
    name: Number,
    email: String,
    firstContact: Date,
    emailType: String,
    sold: Boolean,
    owner: String,
    country: String
})
const CRM = mongoose.model('txs', TxSchema)

app.get('/clients', async function (req, res) {
    await CRM.find({}, function (err, result) {
        // console.log("getting route")
        res.send(result)
    })
})

app.listen(PORT, function(){console.log(PORT)})