let {persons} = require('../data/persons');
const {v4: uuidv4} = require('uuid');

function findAll() {
    return new Promise((resolve, reject) => {

        resolve(persons);
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

        const newPerson = { id: uuidv4(), ...person };
        persons.push(newPerson);
        resolve(newPerson);
    })
}

function update(id, personData) {
    return new Promise((resolve, reject) => {

        const index = persons.findIndex((person) => person.id === id);
        persons[index] = {id, ...personData};
        resolve(persons[index]);
    })
}

function remove(id) {
    return new Promise((resolve, reject) => {
        persons = persons.filter((person) => person.id !== id);
        resolve();
    })
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
};
