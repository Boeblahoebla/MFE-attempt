const express = require('express');
const server = express();
const port = process.env.PORT || 80;

server.listen(port, () => console.log(`Server started listening on http://localhost:${port}.`));

server.get('/', (req, res) => {
    res.send({ value: Math.round(Math.random() * 10000) })
});