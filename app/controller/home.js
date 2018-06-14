const Controller =require('egg').Controller
class HomeController extends Controller{
    async index(){
        this.ctx.body =this.ctx.request
        // console.log(this)
        // console.log(this.ctx.request.method)
        console.log('_____________')
        console.log(this.config)
    }
}
module.exports=HomeController;