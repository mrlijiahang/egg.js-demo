
const Service = require('egg').Service;
class PostService extends Service{
    async findAll(){
       return this.ctx.model.Post.find()
    }
    async create(post){
        this.ctx.model.Post.create(post)
    }
}
module.exports=PostService;
