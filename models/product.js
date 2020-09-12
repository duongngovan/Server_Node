import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    shop : {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref:'Shop'
    },
    name : {
        type : String, required : true
    },
    //giá cả
    price : {
        type : Number
    },
    //số lượng
    amount : {
        type : Number
    },
    //thương hiệu
    brand :{
        type : String
    },
    //xuất xứ
    orgin :{
        type : String
    },
    //chất liệu
    material : {
        type : String
    },
    //bảo hành
    warranty : {
        type : String
    },
    //đánh giá
    review : [{
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'Comment'
    }],
},{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

const Product = mongoose.model('Product',productSchema,'products')
export default Product