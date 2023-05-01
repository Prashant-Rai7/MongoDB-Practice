const getReq = require('./methods/getReq')
const postReq = require('./methods/postReq')
const putReq = require('./methods/putReq')
const deleteReq = require('./methods/deleteReq')
let movies  =  require("./data/jsonformatter.json")
require("dotenv").config()



// console.log(__dirname)
// console.log(movies)



const http = require('http')

PORt = process.env.PORT;

const server = http.createServer((req,res) => {
    req.movies = movies;
    switch (req.method){
        case "GET":
            getReq(req,res)
            break;

        case "POST":
            postReq(req,res)
            break;

        case "PUT":
            putReq(req,res)
            break;
        
        case "DELETE":
            deleteReq(req,res)
            break;
        default:
            // response.writeHead(200, {"Content-Type": "application/json"});
            res.statusCode = 404
            res.setHeader("Content-Type", "application/json")
            res.write(JSON.stringify({title: "Not Found", message: "ROute not found"}) )
            res.end()
    }
})


server.listen(PORt, ()=> {
    console.log(`Connected Successfully :${PORt} and http://localhost:${PORt}`)
})










