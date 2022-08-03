import express ,{ json, urlencoded }from 'express' ;
const app = express()
import cors from 'cors';

app.use(cors());

app.use(json());
app.use(urlencoded({ extended: true}));

const  data={
 products: [
    {
      _id:'1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/imgs/p1.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      _id:'2',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/imgs/p2.jpg',
      price: 250,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      _id:'3',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/imgs/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      _id:'',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/imgs/p4.jpg',
      price: 65,
      countInStock: 0,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ]
}


app.get('/api/products', function (req, res) {
  res.send(data.products);
});
app.get('/api/products/slug/:slug', function (req, res) {
  const product = data.products.find(x=> x.slug === req.params.slug);
  
  console.log(product);
  if(product){
    res.send(product);
  } else {
    res.status(404).send({message: 'Product Not Found'});
  }
});

app.get('/api/products/:id', function (req, res) {
  const product = data.products.find(x=> x._id === req.params.id);
  
  if(product){
    res.send(product);
  } else {
    res.status(404).send({message: 'Product Not Found'});
  }
});



app.listen(5000, ()=>{
  console.log("server starts!!!")
})
