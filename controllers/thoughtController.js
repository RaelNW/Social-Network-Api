const { User, Thought, Reaction } = require("../models");
const {types} = require("mongoose");

const thoughtController = {
  //get all thoughts
  getThoughts(req, res) {
    Thought.find({})
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(400).json(err));
  },

  //get one thought by id
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .then((thought) => {
        if (!thought) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(thought);
      })
      .catch((err) => res.status(400).json(err));
  },

  //create a thought
  createThought(req, res) {
    Thought.create(req.body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with this id!" })
          : res.json(user)
      )
      .catch((err) => res.status(400).json(err));
  },

  //update a thought by id
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, New: true }
    )
      .then((thoughtdata) => {
        !thoughtdata
          ? res.status(404).json({ message: "No thought found with this id!" })
          : res.json(thoughtdata);
      })
      .catch((err) => res.status(400).json(err));
  },

  //delete a thought by id
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.id })
      .then((thoughtdata) => {
        !thoughtdata
          ? res.status(404).json({ message: "No thought found with this id!" })
          : //delete thought from user's thought array
            User.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } }
            )
              .then(() => res.status(200).json({ message: "Thought deleted!" }))
              .catch((err) => res.status(500).json(err));
      })
      .catch((err) => res.status(500).json(err));
  },

  //add reaction to thought
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thoughtdata) => {
        if (!thoughtdata) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(thoughtdata);
      })
      .catch((err) => {
        console.log(err.message);
        res.status(500).json(err);
      });
  },

  //remove reaction from thought
  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thoughtdata) => {
        if (!thoughtdata) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(thoughtdata);
      })
      .catch((err) => {
        console.log(err.message);
        res.status(500).json(err);
      });
  },
};

module.exports = thoughtController;