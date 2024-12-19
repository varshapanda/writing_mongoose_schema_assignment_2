const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    userName:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
    commentedAt:{
        type:Date,
        default:Date.now,
    }
});

const blogPostSchema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        minlength:5
    },
    content:{
        type:String,
        required:true,
        minlength:50
    },
    author:{
        type:String,
        required:true,
    },
    tags:{
        type:[String],
    },
    category:{
        type:String,
        default:'General',
    },
    likes:{
        type:[String],
    },
    comments:{
        type:[commentSchema],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },
},
{
    timestamps:true,
}
);

module.exports=mongoose.model('BlogPost',blogPostSchema);