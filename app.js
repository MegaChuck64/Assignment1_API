var express = require('express');

var app = express();

var port = 3000;


app.use(express.static('public'));

app.use(express.static('src/views'));


app.get("/", 
function(req, res)
{
	res.send("Hollow world is where i'm from.");
});

app.get("/games",
function(req, res)
{
	res.send("Would you like to play the game?");
});

// listen on the port
app.listen(port, 
function(err)
{
	console.log("Server is running on port " + port);
});
				
				
				