const mangoose = require('mongoose');
const  userSchema = new mangoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 4
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    thoughts: [
        {
            type: mangoose.Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: mangoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
});

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
}
);

const User = mangoose.model('User', userSchema);

module.exports = User;