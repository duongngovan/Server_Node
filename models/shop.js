import mongoose from 'mongoose'

const shopSchema = mongoose.Schema({
    id_user:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref:'User',
    },
    name_shop:{
        type: String,
        require: true,
    },
    email_shop:{
        type: String,
        require: true,
    },
    phone_shop:{
        type: String,
        require: true,
    },
    address_shop:{
        type: String,
        require: true,
    },
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
})

const Shop = mongoose.model('Shop', shopSchema, 'shops');
export default Shop;
