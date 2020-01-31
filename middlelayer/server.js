// Imports
//////////

const express = require('express');
const server = express();
const port = process.env.PORT || 80;
const cors = require('cors');


// Middleware
/////////////

server.use(cors());


// API Routes
/////////////

server.get('/', (req, res) => {
    res.send({ value: Math.round(Math.random() * 10000) })
});

server.get('/health', (req, res) => res.send('OK'));

server.get('/monitor', (req, res) => res.send({ self : "OK" }));


// Server activation
////////////////////

server.listen(port, () => console.log(`Server started listening on http://localhost:${port}.`));
