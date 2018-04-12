const {io} = require('../server');

io.on('connection', (client) => {
    
    console.log('Usuario conectado');

    client.emit('Bienvenida', {
        usuario: 'Admin',
        mensaje: 'Bienvenido!'
    });

    client.on('disconnect', ()=>{
        console.log('Usuario desconectado');
    });

    // Escuchar mensaje del cliente
    client.on('enviarMensaje', (mensaje, callback)=>{
        console.log(mensaje);

        if(mensaje.usuario){
            callback({
                resp: 'exito!'
            });
        }else{
            callback({
                resp: 'fallo :('
            });
        }
    });
});