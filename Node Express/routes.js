const express = require('express')
const routes = express.Router()
const fs = require('fs')
const data = require('./data.json')

routes.get('/', (req,res) => res.send('Hello World'))
routes.post('/patients/', (req,res) => {
    const {name, age, weight, height, symptons} = req.body
    data.patients.push({name, age, weight, height, symptons})

    fs.writeFile('data.json', JSON.stringify(data),
    (err) => {
        if (err) return res.status(400).json({message: "Error white registering the patient"})
    })
    return res.send(req.body)
})

routes.get('/patients', (req, res) => {
    return res.json(data.patients)
})

routes.put('/patients/:id', (req, res) => {
    const patientFound = data.patients.find(patient => patient.id == req.params.id)
    if (!patientFound) return res.status(404).json({error: { message: "Patient not found"}})

    const patient = { 
        ...patientFound,
        ...req.body 
    }

    data.patients[patient.id - 1] = patient 
    
    return res.json(patient)
})


module.exports = routes