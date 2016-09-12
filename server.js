var express = require('express'),
        app	= express(),
     logger = require('morgan'),
       path = require('path'),
       port = process.env.PORT || 8080


app.use( logger('dev') )

app.use(express.static(path.join(__dirname, './client-side/public')))


app.listen( port , function ( err ) {
  if ( err ) console.log( err )
  console.log("Running on port ", port )
})
