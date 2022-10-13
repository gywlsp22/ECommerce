// import data from './data.js';
import express ,{ json, urlencoded }from 'express' ;
import path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js'

dotenv.config();

mongoose
.connect(process.env.MONGODB_URI)
.then(()=>{
  console.log('connected to db');
})
.catch((err)=>{
  console.log(err.message);
});

const app = express();
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true}));


app.use(express.urlencoded({extended: true}));

app.get('/api/keys/paypal', (req,res)=>{
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
})

app.get('/api/keys/google', (req,res)=>{
  res.send({ key:process.env.GOOGLE_API_KEY || ''});
});
app.use('/api/seed',seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*',(req,res)=>
res.sendFile(path.join(__dirname, '/client/public/index.html'))
);

// app.get('/api/products', function (req, res) {
  // res.send(data.products);
// });
// app.get('/api/products/slug/:slug', function (req, res) {
  // const product = data.products.find(x=> x.slug === req.params.slug);
  // if(product){
    // res.send(product);
  // } else {
    // res.status(404).send({message: 'Product Not Found'});
  // }
// });
// 
// app.get('/api/products/:id', function (req, res) {
  // const product = data.products.find(x=> x._id === req.params.id);
  // 
  // if(product){
    // res.send(product);
  // } else {
    // res.status(404).send({message: 'Product Not Found'});
  // }
// });
// 
app.use((err,req,res,next)=>{
  res.status(500).send({message:err.message});
});

// app.listen(5000, ()=>{
  // console.log("server starts!!!")
// })
// 

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
  console.log(`server at http://localhost:${port}`)
});