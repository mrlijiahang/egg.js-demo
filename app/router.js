module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.post.index)
};