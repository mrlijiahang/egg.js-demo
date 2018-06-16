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
    async info() {
        const {
            ctx
        } = this;
        ctx.body = {
            name: `hello${ctx.params.id} haha`
        }
    }
    async create() {
        const ctx = this.ctx;
        this.ctx.status = 201
        this.ctx.body = {
            name: 'lijiahang',
            age: '22',
            language: 'node.js'
        }
        console.log(this.ctx)
        const createrule = {
            title: {
                type: 'string'
            },
            content: {
                type: 'string'
            }
        }
        try {
            ctx.validate(createrule)
            console.log('对了')
            ctx.body = {
                success: true
            }
        } catch (err) {
            console.log('出错了');
            ctx.body = '出错了';
            return;

        }


    }
    async create1() {
        const ctx = this.ctx;
        const author = ctx.session.userId;
        const req = Object.assign(ctx.request.body, {
            author
        });
        // 调用 service 进行业务处理
        const res = await ctx.service.post.create(req);
        ctx.body = {
            id: res.id
        };
        ctx.status = 201;
    }
    async page() {

        this.ctx.body = '<html><h1>I</h1></html>'
        this.ctx.status = 201
        console.log(this.ctx.status)
    }

    async add() {
        const ctx = this.ctx;
        ctx.cookies.set('count', 1000, {
            httpOnly: false, // 默认就是 true
            encrypt: false, // 加密传输
        });
        let count = ctx.cookies.get('count');
        count = count ? Number(count) : 0;
        
        ctx.body = count;
        console.log(666)
        console.log(this.ctx.session)
    }
    async remove() {
        const ctx = this.ctx;
        ctx.cookies.set('count', null);
        ctx.status = 204;
    }
    async add1(){
        this.ctx.session =this.ctx.query
        this.ctx.body=this.ctx.session
        console.log(this.ctx.query.password)
        console.log(this.ctx.session)
        console.log(this.ctx.cookies)
        
    }

}


module.exports = HomeController;