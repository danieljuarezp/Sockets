var socket = io();

// Saber si contamos con conexion al servidor
socket.on('connect', function() {
    console.log('Conectado al servidor')
    $("#success").prop("hidden", false);
    $("#danger").prop("hidden", true);
});

// Saber si no contamos con conexion al servidor
socket.on('disconnect', function(){
    console.log('Se perdio conexion con el servidor');
    $("#success").prop("hidden", true);
    $("#danger").prop("hidden", false);
});

$('#submit').click(function(){
    var name = $('#name').val();
    var message = $('#message').val();

    if(name === "" || message === ""){
        return;
    }
    // Enviar informacion al servidor
socket.emit('enviarMensaje', {
    usuario: name,
    mensaje: message
}, function (resp){
    $("#massages").append(" <b>Nombre: </b>"+resp.usuario+" <b>Mensaje: </b>"+resp.mensaje+"<br>");
    $('#name').val('');
    $('#message').val('');
  //console.log('callback', resp);  
});
});


// Escuchar informacion
socket.on('mensaje', function (mensaje){
    $("#massages").append(" <b>Nombre: </b>"+mensaje.usuario+" <b>Mensaje: </b>"+mensaje.mensaje+"<br>");
})