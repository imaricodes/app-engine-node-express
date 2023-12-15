import express from 'express';
import { Server } from 'socket.io';
import http from 'http';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from App Engine!');
});

io.on('connection', (socket) => {
    console.log('a user connected');

    //send a message to the connected client with the socket id
    socket.emit('hello', `Hello from server, ${socket.id}`);

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});