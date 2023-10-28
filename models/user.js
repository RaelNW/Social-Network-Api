const mangoose = require("mongoose");

const userSchema = new mangoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    //email validation
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"],
  },
  thoughts: [
    {
      type: mangoose.Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: mangoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

//add virtuals friendsCount

userSchema.virtual("friendsCount").get(function () {
  return this.friends.length;
});

const User = mangoose.model("User", userSchema);

module.exports = User;
