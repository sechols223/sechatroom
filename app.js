const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static('public/css'));
app.use(express.static('public/js'));
console.log('using db');
app.use(express.static('public/db'));
app.use(express.static('public/socket'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

io.on('connection', (socket) => {
    console.log('a user connected');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    });
});
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});