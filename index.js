const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
 
const app = express();


const PORT = process.env.PORT || 5000;

// let dev_db_url = "mongodb+srv://sergey:timo1234@todos.sb2v2.mongodb.net/todos";
let dev_db_url = "mongodb://localhost/todos";
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true,  useUnifiedTopology: true, useFindAndModify: false});
mongoose.createConnection(mongoDB, { useNewUrlParser: true,  useUnifiedTopology: true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use("/api", require('./routes/api'))


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

