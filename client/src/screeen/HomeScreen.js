import {Link} from 'react-router-dom';

const  data={
  products: [
     {
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
       name: 'Adidas Fit Pant',
       slug: 'adidas-fit-pant',
       category: 'Pants',
       image: '/imgs/p4.jpg',
       price: 65,
       countInStock: 5,
       brand: 'Puma',
       rating: 4.5,
       numReviews: 10,
       description: 'high quality product',
     },
   ]
 }



function HomeScreen(){
  return(
    <div>
<h1>featured products</h1>
    <div className="products">
      {data.products.map((product)=>(
    <div className="product" key={product.slug}>
     <Link to={`/product/${product.slug}`}>
       <img src={product.image} alt={product.name}/>
     </Link>
     <div className="product-info">
       <Link to={`/product/${product.slug}`}>
         <p>{product.name}</p>
       </Link>
       <p><strong>${product.price}</strong></p>
       <button>Add to cart</button>
       </div>
     </div>
      ))}
     </div>
    </div>
    

  );

}
export default HomeScreen;