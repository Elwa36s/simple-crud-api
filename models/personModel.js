const {persons} = require('../data/persons');
const {v4: uuidv4} = require('uuid');

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(persons)
    })
}

function findById(id) {
    return new Promise((resolve, reject) => {
        const person = persons.find((person) => person.id === id);
        resolve(person);
    })
}

function create(person) {
    return new Promise((resolve, reject) => {
        const newPerson = {
            id: uuidv4(),
            ...person
        }
        persons.push(newPerson);
    })
}

module.exports = {
    findAll,
    findById,
    create
};
