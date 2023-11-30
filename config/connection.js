//import mongoose
const mongoose = require("mongoose");

//connect to mongo db
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/social-network-db"
);

//export mongoose connection
module.exports = mongoose.connection;
