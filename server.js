var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');

// register body parser to express js in order to get the POST req.body data
app.use(bodyParser.json());

// replace wth your FB verification token
var token = "<YOUR_VERIFY_TOKEN>";

// GET /webhook will validate the request token and grant access to the FB application
app.get('/webhook/', function (req, res) {
    if (req.query['hub.verify_token'] === token) {
        res.send(req.query['hub.challenge']);
    }
    else{
        res.send('Error, wrong validation token');
    }
});

// POST /webhook will listen to the messages that are sent to the FB Page/App
app.post('/webhook/', function (req, res) {
    var messaging_events = req.body.entry[0].messaging;
    for (i = 0; i < messaging_events.length; i++) {
        var event = req.body.entry[0].messaging[i];
        var sender = event.sender.id;
        if (event.message && event.message.text) {
            text = event.message.text;
            console.log("Received msg : "+text);
            sendTextMessage(sender, "Echo: "+ text.substring(0, 200));
        }
    }
    res.sendStatus(200);
});


app.listen(3010, function () {
    console.log('Example app listening on port 3010!');
});

//This function will send back the messages to the sender
function sendTextMessage(sender, text) {
    var messageData = {
        text:text
    }
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending message: ', error);
        } else if (response.body.error) {
            console.log('Error: ', response.body.error);
        }
        else{
            console.log("Sent msg : "+text);
        }
    });
}

