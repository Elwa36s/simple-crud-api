require('dotenv').config();
const http = require('http');
const {getPersons, getPerson, createPerson, updatePerson, deletePerson} = require('./controllers/personController')
const {validateId} = require('./utils/utils');

const server = http.createServer((req, res) => {
    if (req.url === '/person' && req.method === 'GET') {
        
        getPersons(req, res)

    } else if (req.url.match(/\/person\//) && req.method === 'GET') {
        
        const id = req.url.split('/')[2];

        if (validateId(id)){

            getPerson(req, res, id);

        } else {

            res.writeHead(400, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: 'PersonId is not valid'}));    

        }
        

    } else if (req.url === '/person' && req.method === 'POST') {
        
        createPerson(req,res);

    } else if (req.url.match(/\/person\//) && req.method === 'PUT') {

        const id = req.url.split('/')[2];

        if (validateId(id)){
            
            updatePerson(req, res, id);

        } else {

            res.writeHead(400, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: 'PersonId is not valid'}));    

        }
    
    } else if (req.url.match(/\/person\//) && req.method === 'DELETE') {

        const id = req.url.split('/')[2];
        if (validateId(id)){

            deletePerson(req, res, id);

        } else {

            res.writeHead(400, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: 'PersonId is not valid'}));    

        }

    } else {
        
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'Route not found'}));

    }
});

const PORT = process.env.PORT;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
