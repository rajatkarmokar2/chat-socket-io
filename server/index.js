const express = require( 'express' );
const cors = require( 'cors' );
const { sio,connection } = require( './services/socket-io' );
const app = express()
const port = process.env.PORT || 4000

const server = require( 'http' ).createServer( app );
const io = sio( server );
connection( io )

app.use(cors())

const socketIOMiddleware=(req,res,next)=>{
    req.io=io
    next()
}

app.get( '/',socketIOMiddleware,( req,res ) => {
    io.emit('message',"hello ${req")
    res.status( 200 ).send( 'server started' )
} )

server.listen(4001);
app.listen( port,() => console.log( 'server started at',port ) )
