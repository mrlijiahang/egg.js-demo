const Controller = require('egg').Controller
class PostController extends Controller {
    async index(){
        this.ctx.body= await this.service.post.findAll()
    }
    async create(){
        let post = { name: 'lijiahang', pwd: '456' }
        await this.service.post.create(post)
        this.ctx.body = '增加字段{name:lijiahang,pwd:456}'
        console.log(post)
    }
    async find() {
        let msg = { name: '13213131' }
        this.ctx.body = await this.service.post.find(msg)
    }
    async del(){
        this.ctx.body = '删除字段lijiahang'
        await this.service.post.del()
        console.log(this.service.post.del())
        
    }
//     async update() {
//         let msg = { name: '13213131' }
//         this.ctx.body = await this.service.post.update(msg)

// }
}
module.exports = PostController;