
const http = require('http')
const https = require('https')
const port = process.env.PORT || 8080;

const server = require('./dist/server');

// const options = {
//     key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
//     cert: fs.readFileSync('test/fixtures/keys/agent2-cert.cert')
//   };

// server.app.listen(port, () => {
//     console.log(`Listening on: http://localhost:${port}`);
// });

http.createServer(server.app).listen(port, () => {
    console.log(`Listening on: http://localhost:${port}`);
})

https.createServer(null, server.app).listen(4200, () => {
    console.log(`Listening on: https://localhost:${4200}`);
});