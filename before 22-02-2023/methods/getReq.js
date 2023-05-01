module.exports = (req,res) => {
    let baseurl = req.url.substring(0, req.url.lastIndexOf("/") +1 )
 
    let id = req.url.split("/")[3]
    console.log(id)

    // const regexV4 = new RegExp(/[a-z][0-9]/g)
 
    if (req.url === "/api/movies"){
        res.statusCode =200;
        res.setHeader("Content-Type", "application/json")
        res.write(JSON.stringify(req.movies))   
        res.end();
    }else if(!id){
        res.writeHead(400, {"Content-type": "application/json"})
        res.end(JSON.stringify({title: "Validation Failed", message: "Bad Request UUID is not Valid"}))
    }else if(id) {
        console.log(Title.id,"hello-------")
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        let filteredMovie = req.movies.filter((movie) => {
            return movie.id === id
        })
        if (filteredMovie.length > 0) {
            res.statusCode =200;
            res.write(JSON.stringify(filteredMovie))   
            res.end();
        }else{
            res.statusCode =404;
            res.write(JSON.stringify({title: "Not Found", message: "Movie not found"}))   
            res.end();
        }
    }
    else{
        res.writeHead(200, {"Content-type": "application/json"})
        res.end(JSON.stringify({title: "Not Found", message: "ROute not found"}))
    }
};

