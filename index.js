import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);
const PORT = 3000 || process.env.PORT;

console.log(import.meta.url);

app.get('/', (req, res) => {
    //res.sendFile(new URL('C:/webdev/socket/index.html').pathname);
    res.sendFile(new URL('./index.html', import.meta.url).pathname);
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
  });

  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));