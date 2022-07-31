require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('62e206b9827e6b2a847d3027', {age : 33}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age : 33})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeAndCount = async(id, age) =>{
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('62e2a89081c3fb5a27b14752',33).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})