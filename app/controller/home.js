const Controller = require('egg').Controller
class HomeController extends Controller {
    async index() {
        this.ctx.body = this.ctx.request
        // this.ctx.body="OK"
        // console.log(this)
        // console.log(this.ctx.request.method)
        console.log('_____________')
        console.log(this.config)
    }
    async info(){
        const {ctx} =this;
        ctx.body = {
            name:`hello${ctx.params.id} haha`
        }
    }

}
module.exports = HomeController;