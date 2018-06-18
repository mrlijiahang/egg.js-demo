const Controller = require('egg').Controller
class PostController extends Controller {
    async index(){
        // this.ctx.body='j8'
        console.log('666')
        this.ctx.body= await this.service.post.findAll()
        // this.ctx.body = this.service.post.findAll()
        console.log(this.ctx.model)
        // console.log()
        // console.log(this.ctx.model.db)
    }

}
module.exports = PostController;