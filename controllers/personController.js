const Person = require('../models/personModel');

async function getPersons(req, res) {
    try {
        const persons = await Person.findAll();
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(persons));

    } catch (error) {
        console.log(error);
    }
}

async function getPerson(req, res, id) {
    try {
        const person = await Person.findById(id);

        if(!person){
            res.writeHead(400, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: 'Person Not Found'}));    
        }
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(person));

    } catch (error) {
        console.log(error);
    }
}

async function createPerson(req, res) {
    try {
        const person = {
            name: 'test',
            age: 23,
            hobbies: ['series', 'jogging']
        };

        const newPerson = Person.create(person);
        
        res.writeHead(201, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(newPerson));

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getPersons,
    getPerson,
    createPerson
}