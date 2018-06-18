
const Service = require('egg').Service;
class PostService extends Service{
    async findAll(){
        return this.ctx.model.Post.find()
    }
    async create(post){
        this.ctx.model.Post.create(post)
    }
    async find(msg){
        return this.ctx.model.Post.find(msg)
    }
    async del(){
        this.ctx.model.Post.remove({name:'lijiahang'},function (err) {
            console.log(err)
          })
    }
    // async update(msg){
    //     return this.service.post.findOneAndUpdate(msg, { name: 'qwe' })
    // }
}
module.exports=PostService;
