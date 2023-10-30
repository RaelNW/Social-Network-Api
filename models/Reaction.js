const mongoose = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const reactionSchema = new mongoose.Schema(
  {
    reactionId: {
      type: mongoose.Schema.Types.ObjectId,
      default: new mongoose.Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
      ref: "User",
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
  }, // Tell schema that it can use virtuals
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Reaction = mongoose.model("Reaction", reactionSchema);

module.exports = Reaction;
