const { readFile, writeFile } = require( 'fs/promises' )

const path = require( 'path' );

async function readData () {
    const data = await readFile( path.join( __dirname,'../data.json' ),{ encoding: 'utf-8' } )
    console.log( data );
}
async function writeData (message) {
    const data = await writeFile( path.join( __dirname,'../data.json' ),message,{ encoding: 'utf-8' } )
    console.log( data );
}

module.exports = { readData,writeData }