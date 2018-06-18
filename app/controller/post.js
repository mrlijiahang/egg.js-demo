const Controller = require('egg').Controller
class PostController extends Controller {
    async index(){
        this.ctx.body='j8'
        console.log('666')
        // this.ctx.body= await this.service.post.findAll()
    }

}
module.exports = PostController;