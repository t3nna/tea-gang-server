const {blogsFile} = require('../config')

async function getAllBlogs(){
    try{
        return await require(blogsFile)
    }catch (e){
        console.log(e)

    }
}

module.exports = {getAllBlogs}