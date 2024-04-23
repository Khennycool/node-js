// var let const
let school = 'Appclick'
school = 'Unilag'
// let your keyword cannot be redecleared but can be reassigned

var FullName = 'Musa'
var FullNmae = 'sodiq'
FullName = 'taye'
// VAR CAN BOTH BE REASSIGN AND REDECLEAR

// console.log(FullName);
// const { log } = require('console')
// const nodemon = require('nodemon')
// console.log(nodemon);

// const OS = require('os')
// console.log(OS.version());


const http = require('http');
// console.log(http);


const Server = http.createServer((req,res) => {
  res.writeHead(200,{'Content-type': 'html'})

  if(req.url=== '/about'){
    res.end( '<h1> Welcome to about us page</h1>' )
  }
res.end('this is my server')
})

Server.listen(5000, () =>{
 console.log('server now listening on the port 5000');
})




