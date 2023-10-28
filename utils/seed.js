const db = require("../config/connection");
const { User, Thought } = require("../models");

//import seed data
const { userData, thoughtData } = require("./data");
//establish connection
db.once("open", async () => {
  console.log("db connected");
  try {
    //delete all data
    await User.deleteMany({});
    await Thought.deleteMany({});

    //create empty arrays
    const userData = [];
    const thoughtData = [];

    //create arrays with data
    userData.forEach(({ username, email, firstName, lastName }) => {
      userData.push({ username, email, firstName, lastName });
    });

    thoughtData.forEach(({ thoughtText, username }) => {
      thoughtData.push({ thoughtText, username });
    });

    //seed user and thought data
    await User.insertMany(userData);
    await Thought.insertMany(thoughtData);
    console.log("data seeded");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    db.close();
  }
});
