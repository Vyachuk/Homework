/*********** TASK 1 *****************
const http = require("http");
const os = require('os');
const path = require('path');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<h1>System information</h1>');
  response.write(`<p>Current user name: ${os.userInfo([]).username}<br>\
                OS type: ${os.type()}<br>\
                System work time: ${os.uptime()/60} minutes <br>\
                Current work directory: ${require('path').dirname(require.main.filename)}<br>\
                Server file name: ${path.basename(require.main.filename)}`);
  response.end('</p>');
}).listen(5000);
*/
//*****************TASK 2 */
const personal = require('./personalmodule.js');
const http = require("http");
const os = require('os');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(personal.sayHi(os.userInfo([]).username));
  }).listen(5000);
