const { Thought } = require('../models');

module.exports = {
     getAllThoughts: async (req, res) => {
        try {
            const dbThoughtData = await Thought.find({})
                .populate('reactions')
                .sort({ createdAt: -1 });
            res.json(dbThoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    getThoughtById: async ({ params }, res)=> {
        try {
            const dbThoughtData = await Thought.findOne({ _id: params.id }).populate(
                'reactions'
            );
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(dbThoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    createThought: async({ body }, res)=> {
        const { username, thoughtText, userId } = req.body;
        try {
            const dbThoughtData = await Thought.create(body);
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            //push the created thought to the user thoughts array
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
};



