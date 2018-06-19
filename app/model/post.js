module.exports =app =>{
    const mongoose =app.mongoose;
    const Schema =mongoose.Schema;
    const PostSchema =new Schema({
        name:{type:String},
        pwd:{type:String}
    });
    // 映射表关系原来为Post
    return mongoose.model('stus', PostSchema)
}