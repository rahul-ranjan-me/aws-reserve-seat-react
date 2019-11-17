// var express = require('express');
// var app = express();
// app.use(express.static(__dirname + '/build'));
// app.listen(4000, function() {
//     console.log('Express server listening on port ' + 4000);
// });

var fallback = require('express-history-api-fallback')
var express = require('express')
const app = express()
const root = `${__dirname}/build`
app.use(express.static(root))
app.use(fallback('index.html', { root }))

app.listen(4000, function() {
    console.log('Express server listening on port ' + 4000);
});