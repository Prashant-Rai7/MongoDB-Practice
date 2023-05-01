const express = require("express");
const app = express();
require("dotenv").config()    
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path =  require("path")



// Dynamic Port 
const PORT = process.env.PORT || 8080;

//log-requests
app.use(morgan('tiny'))

// Parse Request to Body_parser
app.use(bodyParser.urlencoded({extended: true}))


//set View Engine
app.set('view engine', "ejs")
// app.set("views", path.resolve(__dirname, "views/ejs"))

//load Assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/image', express.static(path.resolve(__dirname, "assets/image")))
app.use('/javascript', express.static(path.resolve(__dirname, "assets/javascript")))


app.get("/", (req, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
