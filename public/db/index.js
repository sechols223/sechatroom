const redis = require('redis');
const client = redis.createClient( {
    host: 'ec2-54-164-111-86.compute-1.amazonaws.com',
    port: '12710',
    password: 'p5917f69b10d2df9e1c3e5188530a3b09dd80aab3f74c60f083b52e1b84ca2cb1'
});

client.connect()
client.on('connect',() => {
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