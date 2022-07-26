const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const router = new express.Router()


router.post('/users', async (req,res)=>{
    // console.log(req.body);
    // res.send('Testing file!')
    const user = new User (req.body)

    // user.save().then(()=>{
    //     res.status(201).send(user)
    // }).catch((e)=>{
    //     res.status(400).send(e)
        
    // })

    try{
        await user.save()
        res.status(201).send(user)
    }catch(e){
        res.status(400).send(e)
    }
})



router.get('/users',async (req, res)=>{
    // User.find({}).then((users)=>{
    //     res.send(users)
    // }).catch((e)=>{
    //     res.status(500).send(e)
    // })

    try{
        const user = await User.find({})
        res.send(user)
    }catch(e){
        res.status(500).send(e)
    }


})

router.get('/users/:id',async (req, res)=>{
    const _id = req.params.id
    // User.findById(_id).then((user)=>{
    //     if(!user){
    //         return res.status(404).send()
    //     }
    //     res.send(user)
    // }).catch((e)=>{
    //     res.status(500).send(e)
    // })
    //console.log(req.params)

    try{
        const user = await User.findById(_id)
        if (!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(500).send(e)
    }

})

// patch is used to update exiting doc
router.patch('/users/:id', async (req, res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdate = ['name', 'email', 'password', 'age'] // allow these updates and throw error for rest if updated
    const isValidOperation = updates.every((update) =>{
        return allowedUpdate.includes(update)
    })

    if (!isValidOperation){
        return res.status(400).send({error: 'Invalid Errors'})
    }

    try{
        const user = await User.findById(req.params.id)

        updates.forEach((update)=>{
            user[update] = req.body[update] // dynamically update the body
        })

        await user.save()

        //const user = await User.findByIdAndUpdate(req.params.id, req.body, {new : true, runValidators : true})
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(400).send(e)
    }
})

//delete users
router.delete('/users/:id', async (req, res)=>{
    try{
        const userDelete = await User.findByIdAndDelete(req.params.id)
        if(!userDelete){
            return res.status(404).send({error : 'no user found'})
        }
        res.send(userDelete)
    }catch(e){
        res.send(400).send(e)
    }
})


module.exports = router