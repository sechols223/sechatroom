const redis = require('redis');
const fs = require('fs');
const client = redis.createClient({
    url: 'rediss://:p5917f69b10d2df9e1c3e5188530a3b09dd80aab3f74c60f083b52e1b84ca2cb1@ec2-54-164-111-86.compute-1.amazonaws.com:12710',
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

