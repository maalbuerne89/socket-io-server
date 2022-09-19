const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"]
    }
  });

io.on('connection', (socket) => {
    const idHandShake = socket.id;
    const { nameRoom } = socket.handshake.query;

    socket.join(nameRoom);

    console.log(`Hola dispositivo: ${idHandShake} se unio --> ${nameRoom}`);

});

server.listen(5000, () => {
    console.log(`>> Socket listo y escuchando por el puerto: 5000`);
});