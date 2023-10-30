const mongoose = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    min: 1,
    max: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal),
  },
  username: {
    type: String,
    required: true,
    ref: "User",
  },
  reactions: [
    //array of nested documents created with the reactionSchema
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reaction",
    },
  ],
});
//add virtuals reactionCount
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});
const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;
