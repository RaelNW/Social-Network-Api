const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
},
// Tell schema that it can use virtuals
{
  toJSON: {
    virtuals: true,
  },
  id: false,
}
);
//add virtuals friendsCount

userSchema.virtual("friendsCount").get(function () {
  return this.friends.length;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
