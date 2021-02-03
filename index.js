const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
/*----------------------Data base-------------- */

mongoose.connect("mongodb://localhost/test", {useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex:true })
 .then((result)=>{
    console.log("Mongodb Database is connected...");
 })
 .catch((err)=>{
    console.log("Database is not connected...", err.message);
 })

/*----------------------Data base-------------- */
const app = express();

app.use(cors());

app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });
 app.use(bodyParser.json({limit: '50mb'}));
 app.use(bodyParser.urlencoded({limit: '50mb', extended: true ,parameterLimit:50000}));
 
require('./router')(app);



//var server = http.createServer(app);
app.listen(process.env.PORT || 3030, ()=>{
    console.log("Server is listning on PORT 3030");
} )