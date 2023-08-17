
const Goal = require('../models/goalModel')
const AsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken')
const postGoals = AsyncHandler(async(req,res)=>{
    const goalField = req.body.goal
    if(!goalField){
        res.status(400);
        throw new Error('Please enter the field')
    }

    const goals = await Goal.create({
        user:req.user,
        goal:goalField
    })

    res.json({
        goals
    })
})


const getGoals =AsyncHandler(async(req,res)=>{
    const goals = await Goal.find({user:req.user.id});
    res.json({
        goals
    })
})
 

const updateGoals =AsyncHandler(async(req,res)=>{
    const checkGoal = await Goal.findById(req.params.id);
    if(!checkGoal){
        res.status(404);
        throw new Error('No Goal Found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })

    

    res.json({
        updatedGoal
    })
})

const deleteGoals = AsyncHandler(async(req,res)=>{
    const checkGoal = await Goal.findById(req.params.id);
    if(!checkGoal){
        res.status(404);
        throw new Error('Goal not found');
    }

    await Goal.deleteOne();

    res.json({
       id:checkGoal._id
    })
})




module.exports = {
    postGoals,
    getGoals,
    updateGoals,
    deleteGoals
}