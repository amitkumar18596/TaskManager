require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndRemove('62e21728049a1a053938dce4', ({Completed:false})).then((task)=>{
//     console.log(task)
//     return Task.countDocuments({Completed:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async(id, Completed) =>{
    const task = await Task.findByIdAndRemove(id, {Completed})
    const count = await Task.countDocuments({Completed})
    return count
}

deleteTaskAndCount('62e15d20382ef5ff9e0d9c2e',true).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})