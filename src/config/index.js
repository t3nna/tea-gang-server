const path = require('path')

const dbFolder = path.resolve(__dirname, '../../db')
const blogsFile = path.resolve(dbFolder, 'blog.json')
module.exports ={
    PORT: 3000,
    dbFolder,
    blogsFile
}