//Import Routes
const express = require('express')
const fileuploader = require('express-fileupload')
const cors = require('cors');
const mongoose = require('mongoose')

//Models
require("./UserModel");

const userRoutes = require("./routes");


const app = express()

// A middleware which will enable cors with various options like exposeHeader etc.
app.use(cors({ exposeHeader: "id"}));
// A middleware which will extract req.body for us
app.use(express.json());
// A middleware which will extract re.files for us
app.use(fileuploader());

// Routes
app.use("/user", userRoutes);







//Connecting to the db 
mongoose
  .connect('mongodb://localhost/UploadImage', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
  .then(() => {
    console.log('We are connected to MongoDB');
  })
  .catch((err) => {
    console.log(err.message);
  });

//Middleware

port = 5000

app.listen(port, () => {
  console.log('listening on port ' + port || 5000);
});
