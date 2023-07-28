// Create web server
// Run: node comments.js
// Load in browser: http://localhost:3000/
// To stop: Ctrl + C

// Import modules
const http = require('http')
const fs = require('fs')
const url = require('url')

// Create web server
http.createServer(function(req, res) {
  // Get the path name from the URL
  let pathname = url.parse(req.url).pathname

  // Log the name of the file for which the request was made
  console.log('Request for ' + pathname + ' received.')

  // Read the requested file content from file system
  fs.readFile(pathname.substr(1), function(err, data) {
    if (err) {
      console.log(err)

      // HTTP Status: 404 : NOT FOUND
      // Content Type: text/plain
      res.writeHead(404, { 'Content-Type': 'text/html' })
    } else {
      // Page found
      // HTTP Status: 200 : OK
      // Content Type: text/plain
      res.writeHead(200, { 'Content-Type': 'text/html' })

      // Write the content of the file to response body
      res.write(data.toString())
    }

    // Send the response body
    res.end()
  })
}).listen(3000)

// Console will print the message
console.log('Server running at http://localhost:3000/')