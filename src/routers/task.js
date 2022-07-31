const express = require('express')
const Task = require('../models/task')
const router = new express.Router()

router.post('/tasks',async (req,res)=>{
    const task = new Task(req.body)

    // task.save().then(()=>{
    //     res.status(201).send(task)
    // }).catch((error)=>{
    //     res.status(400).send(error)
    // })

    try{
        await task.save()
        res.status(201).send(task)
    }catch(error){
        res.status(400).send(error)
    }
})

router.get('/tasks',async (req,res)=>{
    // Task.find({}).then((task)=>{
    //     res.status(302).send(task)
    // }).catch((e)=>{
    //     res.status(404).send(e)
    // })

    try{
        const task = await Task.find({})
        res.status(302).send(task)
    }catch(e){
        res.status(404).send(e)
    }
})

router.get('/tasks/:id',async (req,res)=>{
    const _id = req.params.id

    // Task.findById(_id).then((task)=>{
    //     if(!task){
    //         return res.status(404).send()
    //     }
    //     res.send(task)
    // }).catch((e)=>{
    //     res.status(500).send(e)
    // })

    try{
        const task = await Task.findById(_id)
    if (!task){
        return res.status(404).send()
    }
    res.send(task)
    }catch(e){
        res.status(500).send(e)
    }

})

// Updating the tasks
router.patch('/tasks/:id', async (req, res)=>{
    const updatesTask = Object.keys(req.body)
    const alowedUpdatesTask = ["Description", "Completed"]
    const isValidOperationTask = updatesTask.every((update) =>{
        return alowedUpdatesTask.includes(update)
    })

    if(!isValidOperationTask){
        return res.status(400).send({error:"invalid updates"})
    }

    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new : true, runValidators : true})
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.status(400).send(e)
    }
})

//delete tasks
router.delete('/tasks/:id', async (req, res)=>{
    try{
        const taskDelete = await Task.findByIdAndDelete(req.params.id)
        if(!taskDelete){
            return res.status(404).send({error : 'no user found'})
        }
        res.send(taskDelete)
    }catch(e){
        res.send(400).send(e)
    }
})

module.exports = router