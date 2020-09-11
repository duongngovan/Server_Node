import mongoose from 'mongoose'

const shopSchema = mongoose.Schema({
    id_user:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref:'users',
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
    product:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    }]
})

const Shop = mongoose.model('Shop', shopSchema, 'shop');
export default Shop;
