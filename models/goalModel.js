const mongoose = require('mongoose');


const GoalSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    goal:{
        type:String,
        required: [true,'Please enter this field']
    }
},{
    
    timestamps:true
})

module.exports = mongoose.model('Goal',GoalSchema);