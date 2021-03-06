// //Install express server
// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/cars-website'));

// app.get('/*', function (req, res) {

//     res.sendFile(path.join(__dirname + '/dist/cars-website/index.html'));
// });

// // Start the app by listening on the default Heroku port
// const Port = process.env.PORT || 8080
// app.listen(process.env.PORT || 8080);
// console.log('App Start ' + Port);
const express = require('express');  
const app = express();  
app.use(express.static(__dirname + '/dist'));  
app.all('*', (req, res) => {  
  res.status(200).sendFile(__dirname + '/dist/index.html');  
});  
app.listen(process.env.PORT || 8080);  