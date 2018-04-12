const {io} = require('../server');

io.on('connection', (client) => {
    
    console.log('Usuario conectado');

    client.emit('mensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido!'
    });

    client.on('disconnect', ()=>{
        console.log('Usuario desconectado');
    });

    // Escuchar mensaje del cliente
    client.on('enviarMensaje', (data, callback)=>{
       
        console.log(data);

        client.broadcast.emit('mensaje', data);

       // if(mensaje.usuario){
        //    callback({
       //         resp: 'exito!'
       //     });
      //  }else{
       //     callback({
       //         resp: 'fallo :('
       //     });
      //  }
    });
});