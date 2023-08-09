const { Schema, model } = require('mongoose');
const Reaction = require('./reaction')

// , get: formatTime(createdAt)
const thoughtSchema = new Schema(
    {
        thoughtText: {type: String, required: true, minLength:1, maxLength:280},
        createdAt:{ type: Date, default: Date.now()},
        username:{type: String, required: true},
        reactions:[Reaction]
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length
})

// function formatTime(createdAt){
//   console.log(createdAt)
// }

const Thought = model('thought', thoughtSchema);

module.exports = Thought