import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);

console.log(import.meta.url);

app.get('/', (req, res) => {
    //res.sendFile(new URL('C:/webdev/socket/index.html').pathname);
    res.sendFile(new URL('opt/render/project/src/index.html').pathname);
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
  });


server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});