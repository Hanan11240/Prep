import express from 'express'
import { Server } from 'socket.io';
import path from 'path'
import { fileURLToPath } from 'url'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, "public")))

const expressServer = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});

const io = new Server(expressServer, {
    cors: {
        origin: process.env.NODE_ENV === 'production' ? false : ["http://localhost:5500", "http://127.0.0.1:5500"]
    }
})

io.on("connection", socket => {

    // Upon connection - only  to user
    socket.emit('message', "Welcome to chat app !!!");

    // Uppon connection - to all users
    socket.broadcast.emit('message', `User ${socket.id.substring(0, 5)} connected`);

    // listening for message event
    socket.on("message", data => {
        io.emit('message', `${socket.id.substring(0, 5)} : ${data}`);

    })

    // When user disconnects
    socket.on('disconnect', () => {
        socket.broadcast.emit('message', `User ${socket.id.substring(0, 5)} disconnected`);

    })

    // listening for activity
    socket.on('activity', (id) => {
        console.log(id)
        socket.broadcast.emit('activity', id)
    })
});