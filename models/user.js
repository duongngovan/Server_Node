import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


const userSchema = mongoose.Schema({
    name : { 
        type : String , required : true, trim : true
    },
    email : {
        type : String, lowercase : true, trim : true,
    },
    password: {
        type : String, required : true, 
    },
    phone : { 
        type : String ,  trim : true, required : true
    },
    address : { 
        type : String , 
    },
    tokens: [{
        token : {
            type : String,
            required : true
        }
    }]
    

})

//mã hóa password trước khi lưu
userSchema.pre('save',async function(next){
    const user = this;
    if (user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }
    next()
})
//lấy token
userSchema.methods.generateAuthToken = async function() {
    const user = this
    const token = jwt.sign({_id: user._id}, "ProjectX")
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}



const User = mongoose.model('User',userSchema,'users');
export default User;
