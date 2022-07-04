// Load express module using `require` directive
let express = require('express')
let app = express()

// Define request response in root URL (/)
app.get('/', function (req, res) {
res.send('<center><h1>Hello, world!!! I am rituparna majhi</h1></center>')
})

// Launch listening server on port 8081
app.listen(8081, function () {
console.log('app listening on port 8081')
})

