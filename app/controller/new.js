const Controller = require('egg').Controller
class NewController extends Controller {
    async index() {
        this.ctx.body = `search:${this.ctx.query.name}`
    };
    async index1() {
        this.ctx.body = `user:${this.ctx.params.id},${this.ctx.params.name}`
    }

}
module.exports = NewController;