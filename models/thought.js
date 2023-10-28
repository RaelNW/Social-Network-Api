const mangoose = require("mongoose");

const thoughtSchema = new mangoose.Schema({
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
    {
      type: mangoose.Schema.Types.ObjectId,
      ref: "Reaction",
    },
  ],
});
//add virtuals reactionCount
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});
const Thought = mangoose.model("Thought", thoughtSchema);

model.exports = Thought
