exports.keys="lijiahang";
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks',
    },
}
exports.mongoose={
    url: 'mongodb://127.0.0.1:27017/stus',
    options: {}
}