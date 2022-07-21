// var express = require('express');
// var osc = require("osc"),
//     http = require("http"),
//     WebSocket = require("ws");

// // Create an Express server app
// // and serve up a directory of static files.
// var app = express();
// var server = http.createServer(app);

// var kport = process.argv[2] || 3002;
// server.listen(kport, function(){
//     console.log('listening on *:' + kport);
// });

// app.use("/", express.static(__dirname + "/www"));

// // Listen for Web Socket requests.
// var wss = new WebSocket.Server({
//     server: server
// });

// // Listen for Web Socket connections.
// wss.on("connection", function (socket) {
//     var socketPort = new osc.WebSocketPort({
//         socket: socket,
//         metadata: true
//     });

//     socketPort.on("message", function (oscMsg) {
//         console.log("An OSC Message was received!", oscMsg);
//     });
// });

// // var express = require('express');
// // const OSC = require('osc-js')
// // var WebSocket = require("ws");


// // // Create an Express server app
// // // and serve up a directory of static files.

// // var app = express();
// // var http = require("http");

// // var server = http.createServer(app);

// // var kport = process.argv[2] || 3002;
// // server.listen(kport, function(){
// //     console.log('listening on *:' + kport);
// // });

// // const plugin = new OSC.WebsocketServerPlugin({ port: kport })
// // const osc = new OSC({ plugin: plugin })

// // var m_useRoot="/www";
// // console.log(__dirname);
// // app.use(express.static(__dirname + m_useRoot));

// // app.get('/', function(req, res){
// //     res.sendFile(__dirname + '/www/index.html');
// // });


// // // Listen for Web Socket requests.
// // var wss = new WebSocket.Server({
// //     server: server
// // });

// // // Listen for Web Socket connections.
// // wss.on("connection", function (socket) {

// //     socketPort.on("message", function (oscMsg) {
// //         console.log("An OSC Message was received!", oscMsg);
// //     });

// // });


var express = require("express"),
    http = require("http");

//server listens to port 8081, and sends a message when udp port recieves a msh

var appResources = __dirname + "/www",
    app = express();

app.use("/", express.static(appResources));

var server = http.createServer(app);
    // wss = new WebSocket.Server({
    //     server: server
    // });

var kport = process.argv[2] || 3002;
server.listen(kport, function(){
    console.log('listening on *:' + kport);
});

