import http from 'http';
import { Server } from 'socket.io';
const httpServer = http.createServer((req, res) => {
    res.end('Hello, world!');
});


const io = new Server(httpServer, {
    cors: {
        origin: process.env.NODE_ENV === 'production' ? false : ["http://localhost:5500","http://127.0.0.1:5500"]
    }
})

io.on("connection", socket => {
    console.log(`User ${socket.id} connected`);
    socket.on("message", data => {
        console.log(data)
        io.emit('message', `${socket.id.substring(0, 5)} : ${data}`)
    })
})


httpServer.listen(3000, () => console.log("Server listening at 3000"));