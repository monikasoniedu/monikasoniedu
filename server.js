
/*os require is not working use import*/
// const os= require('os')
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.release());

// import {platform,arch,release}from 'os'
// console.log(platform())
// console.log(arch())
// console.log(release())

// import { readFile, writeFileSync } from 'fs'
// writeFileSync('test.txt','this is a new test text')
// /*
// there are many file system methods google nodejs fs methods */

// readFile('test.txt','utf8',(err,data)=>{
//     if (err)throw err;
//     console.log(data);
// });

 /*http server*/
 import {response}from 'express'
 import{createServer}from 'http'

//  const server=createServer(function(request,response){
//     response.writeHead(200,{'Content-Type':'text/plain'})
//     response.end('hello class')//writing response body
//  })

//  server.listen(4000,()=>{
//     console.log('server is running at http://localhost:4000/')
//  })

//  do in console to run this is npm run dev its seen form pacakge .json folder
const server=createServer(function(request,response){
    const url=request.url
//routing
//     if(url==='/'){
//         response.writeHead(200,{'Content-Type':'text/plain'})
//             response.end('home page')
//         }

//         if(url==='/about'){
//             response.writeHead(200,{'Content-Type':'text/plain'})
//                 response.end('about page')
//             }     
//             if(url==='/contact'){
//                 response.writeHead(200,{'Content-Type':'text/plain'})
//                     response.end('contact page')
//                 }
// })
// server.listen(4000,()=>{
//         console.log('server is running at http://localhost:4000/')
//      })
if(url==='/'){
    response.writeHead(200,{'Content-Type':'text/plain'})
        response.end('home page')
    }

    else if(url==='/about'){
        response.writeHead(200,{'Content-Type':'text/plain'})
            response.end('about page')
        }     
     else    if(url==='/contact'){
            response.writeHead(200,{'Content-Type':'text/plain'})
                response.end('contact page')
            }
            else {
                response.writeHead(404,{'Content-Type':'text/plain'})
                    response.end('error page')
                }
                
})
server.listen(4000,()=>{
    console.log('server is running at http://localhost:4000/')
 })