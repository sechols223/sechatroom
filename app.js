const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//----------
//Loading static files
app.use(express.static("public"));
//----------

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/pages/login.html');
})

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

server.listen(port, () => {
    console.log('listening on port: &{port}');
});