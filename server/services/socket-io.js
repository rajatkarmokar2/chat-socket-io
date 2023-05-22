const socketIo = require( 'socket.io' )
const { readData,writeData } = require( './store-data' )

readData()

exports.sio = server => {
    return socketIo( server,{
        transport: [ 'polling' ],
        cors: {
            origin: "*"
        }
    } )
}

exports.connection = io => {
    io.on( 'connection',socket => {

        console.log( 'a user is connected' );

        socket.on( 'message',message => {
            console.log( `message from ${message} ${socket.id} : ${message}` );
            socket.emit( 'message',message )
            writeData( JSON.stringify( { id: socket.id,message } ) )
        } )

        socket.on( "disconnect",() => {
            console.log( `socket ${socket.id} disconnected` )
        } )

    } )
}