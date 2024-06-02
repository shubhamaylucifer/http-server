const http = require('http');
// const fs = require('fs')
// const url = require('url')
const express = require('express')

const app = express();

app.get('/',(req,res)=>{
    return res.send('Hello from Home Express')
})

app.get('/about',(req,res)=>{
    return res.send('Hello from About Express' + 'from' + req.query.name)
})


// function myHandler(req,res){
//     if(req.url === '/favicon.ico') return res.end();
//     const log = `${Date.now()}: ${req.method} New Request Received \n`
//     const myurl = url.parse(req.url,true);
//    // console.log(myurl);
//     switch(myurl.pathname){
//         case "/":
//             if(req.method ==='GET') res.end('Home Page');
//             break;
//         case "/about":
//             const username = myurl.query.myname;
//             res.end(username)
//             break;
//         case "/signup":
//             if(req.method === 'GET') res.end('This is a signup form') 
//             else if (req.method === 'POST'){
//                 //DB query to insert
//                 res.end('Success')
//             }      
//     }
//     fs.appendFile('log.txt',log, (err,data)=>{
//     res.end('Good Bye')
//    })
   
// };


app.listen(8000,() => console.log('Server Started'))
// const myServer = http.createServer(app)

// myServer.listen(8000,()=>{
//     console.log('Server Started')
// });