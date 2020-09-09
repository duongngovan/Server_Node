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

export function getAllUser(req,res){
    User.find({}).then(users => {
        res.send(users)
    })
}

export async function deleteUser(req,res){
    try {
        const user = await User.findByIdAndDelete(req.params.id, req.body);
        if(!user){
            res.status(404).send("User not found")
        } else {
            res.send('Delete success')
        }
    } catch (error) {
        res.status(500).send(error);
    }
}