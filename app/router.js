module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.new.index);
    router.get('/3', controller.home.add1);
    router.get('/4', controller.home.remove);
    router.get('/1/:id',controller.home.info)
    router.get('/2', controller.new.index1)
    router.post('/w', controller.ljh.create);

   
    // router.get('/lijiahang',controller.new.js)
    // router.get('/news', controller.news.index);
};