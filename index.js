import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'

const app = express();
const port = 3000;
const url = "mongodb+srv://nhannbt:nhanne@cluster0-hw1yh.mongodb.net/dbDuAn?retryWrites=true&w=majority"

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(url,
    {useNewUrlParser : true, useUnifiedTopology :true})
    .then(()=>{
        console.log('Đã kết nối đến Mongodb');
    }).catch((error)=>{
        console.log("Lỗi kết nối đến database");
    })

app.get('/', (req, res) =>{
    res.send("hello world");
})
app.listen(port, (req,res)=>{
    console.log(`Đang chạy trên port ${port}`);
})
