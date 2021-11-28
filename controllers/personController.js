const Person = require('../models/personModel');
const {getBodyData} = require('../utils/utils');

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

        if(!person) {
            
            res.writeHead(404, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: `Person with ${id} not found`}));    
        
        } else {

            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(person));
    
        }

    } catch (error) {
        console.log(error);
    }
}

async function createPerson(req, res) {
    try {
        const body = await getBodyData(req);
        const {name, age, hobbies} = body;

        if(!name || !age || !hobbies) {

            res.writeHead(400, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: `Name, age, hobbies are required!`}));    

        } else {

            const person = {name, age, hobbies};
            const newPerson = await Person.create(person);
    
            res.writeHead(201, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(newPerson));    

        }

    } catch (error) {
        console.log(error);
    }
}

async function updatePerson(req, res, id) {
    try {

        const person = await Person.findById(id);

        if (!person){

            res.writeHead(404, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: 'Person with entered id is not found'}));  

        } else {

            const body = await getBodyData(req);
            const {name, age, hobbies} = body;
    
            const personData = {
                name: name || person.name,
                age: age || person.age,
                hobbies: hobbies || person.hobbies,
            };
            const updatedPerson = await Person.update(id, personData);
    
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(updatedPerson));
    
        }

    } catch (error) {
        console.log(error);
    }
}

async function deletePerson(req, res, id) {
    try {
        const person = await Person.findById(id);

        if(!person) {
            
            res.writeHead(404, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: 'Person with entered id is not found'}));    
        
        } else {

            await Person.remove(id);

            res.writeHead(204, {'Content-Type': 'application/json'});
            res.end();
        }

    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getPersons,
    getPerson,
    createPerson,
    updatePerson,
    deletePerson
}