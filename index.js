import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRouter from './routers/userRouter.js';
import shopRouter from './routers/shopRouter.js';

const app = express();
const port = 3000;
const url = "mongodb+srv://nhannbt:nhanne@cluster0-hw1yh.mongodb.net/dbDuAn?retryWrites=true&w=majority"

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(url,
    {useNewUrlParser : true, useUnifiedTopology :true})
    .then(()=>{
        console.log('Đã kết nối đến Mongodb');
    }).catch((error)=>{
        console.log("Lỗi kết nối đến database");
    })

//cài đặt điều hướng
app.use('/user/',userRouter);
app.use('/shop/',shopRouter);


app.get('/', (req, res) =>{
    res.send("hello world test ");
})

app.listen(port, (req,res)=>{
    console.log(`Đang chạy trên port ${port}`);
})
