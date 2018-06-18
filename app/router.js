module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.post.index)
    router.get('/1', controller.post.create)
    router.get('/2', controller.post.find)
    // router.get('/3', controller.post.updated)
    router.get('/4', controller.post.del)

};