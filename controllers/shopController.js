import Shop from '../models/shop.js'

export async function addShop(req, res) {
    const shop = new Shop(req.body);
    try {
        if (await Shop.findOne({
                id_user: req.body.id_user
            })) {
            throw new Error('Mỗi người dùng chỉ được đăng ký 1 shop')
        } else {
            await shop.save()
            res.status(201).send({
                success: true,
                message: 'Tạo shop thành công',
                shop: shop
            })
        }
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
}

export function getShop(req, res) {
    Shop.find({}).then(shops => {
        res.send(shops)
    })
}