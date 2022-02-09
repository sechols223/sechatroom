const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const redis = require('redis');
const client = redis.createClient({
    url: 'redis://:p5917f69b10d2df9e1c3e5188530a3b09dd80aab3f74c60f083b52e1b84ca2cb1@ec2-54-164-111-86.compute-1.amazonaws.com:12709',
    socket: {
        tls: true,
        rejectUnauthorized: false
    }
});

client.connect();
client.on('connect',function() {
    console.log('Connection Established');
});

client.on('error', err => {
    console.log('Error ' + err);
});

client.set('foo', 'bar', (err, reply) => {
    if (err) throw err;
    console.log(reply);

    client.get('foo', (err, reply) => {
        if (err) throw err;
        console.log(reply);
    });
});

app.use(express.static("public"));


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})