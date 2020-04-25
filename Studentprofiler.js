var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require('body-parser');
// var urlencodedParser = bodyParser.urlencoded({ extended: true });
// var fs = require('fs')
// var finalObj = require('./file.json');

//adding the mongodb file
require('./src/db/mongoose')
//Adding the studentprofile router
const StudentProfile = require('./src/routers/Profile')
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(StudentProfile)

app.use(express.static(__dirname+'/Views/'));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/Views/Profile.html'));
	
});


// Running Server Details.
var server = app.listen(process.env.PORT||8082, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("App listening at %s:%s Port", host, port)
});



// app.post('/post', urlencodedParser, function (req, res) {
//     var reply = 'Query submitted successfully';
//     let obj = {
//         firstname: req.body.firstname,
//         lastname: req.body.lastname,
//         DOB: req.body.DOB,
//         SSID: req.body.SSID,
// 		Degree: req.body.Degree,
// 		University: req.body.University
		
//     }
//     finalObj.push(obj)
//     fs.writeFile('./file.json', JSON.stringify(finalObj), function (err) {
//         res.send(reply);
// 		res.sendFile(path.join(__dirname+'/Views/Profile.html'));
	
//     });
// });

// app.get('/DisplayProfiles', urlencodedParser, function (req, res) {
//     let rawdata = fs.readFileSync('./file.json');
//     let data = JSON.parse(rawdata);
//     res.send(data)
   
// });