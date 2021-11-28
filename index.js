require('dotenv').config();
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
});

const PORT = process.env.PORT;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))