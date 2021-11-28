require('dotenv').config();
const http = require('http');
const {getPersons, getPerson, createPerson} = require('./controllers/personController')


const server = http.createServer((req, res) => {
    if (req.url === '/person' && req.method === 'GET') {
        getPersons(req, res)
    } else if (req.url.match(/\/person\/([0-9+])/) && req.method === 'GET') {
        const id = req.url.split('/')[2];
        console.log(id);
        getPerson(req, res, id);
    } else if (req.url === '/person' && req.method === 'POST') {
        createPerson(req,res);
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'Route not found'}))
    }
});

const PORT = process.env.PORT;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
