//require all packages needed
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");


//set up port and express app
const PORT = process.env.PORT || 3001;
const app = express();
//use middleware to parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//use routes
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on http://localhost:${PORT}`);
  });
});
