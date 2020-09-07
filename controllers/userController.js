import User from '../models/user.js'



export async function addUser(req,res){
    const user = new User(req.body);
    try{
        if(await User.findOne({ phone: req.body.phone}))
        {
            throw new Error(' Số điên thoại này đã được đăng ký !')
        }else{
    await user.save()
    // const token = await user.generateAuthToken()
    res.status(201).send({ 
        success: true,
        message : 'Thêm người dùng thành công !',
        user : user
    })
    console.log(user)
}
    }catch(err){
        res.status(400).send({
            message : err.message
        })
    }

}