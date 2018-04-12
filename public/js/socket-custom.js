var socket = io();

// Saber si contamos con conexion al servidor
socket.on('connect', function() {
    console.log('Conectado al servidor')
});

// Saber si no contamos con conexion al servidor
socket.on('disconnect', function(){
    console.log('Se perdio conexion con el servidor');
});

// Enviar informacion al servidor
socket.emit('enviarMensaje', {
    usuario: 'Daniel Juarez',
    mensaje: 'Primer mensaje'
}, function (resp){
  console.log('callback', resp);  
});

// Escuchar informacion
socket.on('mensaje', function (mensaje){
    console.log(mensaje);
})