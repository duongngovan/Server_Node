import Product from '../models/product.js'
import Shop from '../models/shop.js'

//thêm sản phẩm
export function addProduct(req,res){
    const idShop = req.body.shop
    const product = new Product(req.body)
    Shop.update({_id : idShop},{$push : {products : product}}).then(()=>{
        product.save()
        return res.send({
            message : 'Thêm sản phẩm thành công !',
            product : product
        })
    })
}
//hiển thị chi tiết 1 sản phẩm
export function getProductByID(req,res){
    const id = req.params.id
    Product.findById(id).populate('shop').then((product)=>{
        return res.send({
            message : 'Chi tiết sản phẩm',
            product : product
        })
    })
}
//tìm kiếm sản phẩm theo tên
export function getProductByName(req,res){
    const name = req.params.name;
    Product.find({name :  {$regex : name,$options : 'i' }}).then((list)=>{
    if(list.length > 0){
        return res.status(200).json({
            message: `Kết quả tìm kiếm của ${name}`,
            products: list
        });
    }else{
        res.send({
            message: `Không tìm thấy sản phẩm  ${name}`,
        });
    }
    }).catch((err) => {
        res.status(500).json({
            message: `Lỗi tìm kiếm ${err.message}`,
            
        });
     });   
}
//hiển thị danh sách sản phẩm
export function getAllProduct(req,res){
    Product.find().then((list)=>{
        return res.send({
            message : 'Danh sách sản phẩm',
            products : list
        })
    })
}
//cập nhật sản phẩm
export function updateProduct(req,res){
    const id = req.params.id
    const updateProduct = req.body
    Product.update({_id : id},{ $set : updateProduct}).then(()=>{
        return res.send({
            message : 'Cập nhật sản phẩm thành công !',
            product : updateProduct
        })
    }).catch((error)=>{
        res.send({message : 'Cập nhật thất bại ! \n Lỗi : ' + error})
    })
}
//xóa sản phẩm
export function deleteProduct(req,res){
    const id = req.params.id
    Product.findByIdAndDelete(id).then(()=>{
        res.send({
            message : 'Xóa sản phẩm thành công !'
        })
    })
}