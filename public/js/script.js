$("#generate").click(function(){
    var lorem = $("#lorem");
    lorem.html("");
    var quantity = $("#quantity")[0].valueAsNumber;
    var data = ["Lorem ipsum", "quia dolor sit", "amet", "consectetur"];
    for(var i = 0; i < quantity; i++){
        lorem.append("<p>"+data[i]+"</p>");
    }
})

$("#copy").click(function() {
        var range = document.createRange();
        range.selectNode($("#lorem")[0]);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
    }
)
const redis = require('redis');
const client = redis.createClient( {
    host: 'ec2-54-164-111-86.compute-1.amazonaws.com',
    port: '12710',
    password: 'p5917f69b10d2df9e1c3e5188530a3b09dd80aab3f74c60f083b52e1b84ca2cb1'
});

client.on('error', err => {
    console.log("Error " + err);
});

client.set('foo', 'bar', (err, reply) => {
    if (err) throw err;
    console.log(reply);

    client.get('foo', (err, reply) => {
        if (err) throw err;
        console.log(reply);
    });
});