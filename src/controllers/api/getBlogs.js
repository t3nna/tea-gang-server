const {getAllBlogs} = require('../../sevices')
module.exports =  async (req, res, next)=>{
   try{
      const blogs = await getAllBlogs()
       res.send(blogs)
   }catch (e) {
       next(e)
   }
}