const http = require('http');
const WebSocketServer = require("websocket").server;
let connection = null;
const httpServer = http.createServer((req, res) => {
    console.log("We have received a requests");
})

const websocket = new WebSocketServer({

    "httpServer": httpServer
});

websocket.on('request', request => {
    connection = request.accept(null, request.origin);
    connection.on("open", () => console.log("Opened"));
    connection.on("close", () => console.log("Closed"));
    connection.on("message", message => {
        console.log(`Received message ${message?.utf8Data}`)
    });
    sendRandomMessage();

})


function sendRandomMessage() {
    connection.send(`Message ${Math.random()}`)

    setTimeout(sendRandomMessage, 5000)
}
httpServer.listen(8080, () => console.log("Server listening at 8080"))