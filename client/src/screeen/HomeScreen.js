import {Link} from 'react-router-dom';
import {useEffect,useState} from 'react'
import axios from 'axios';




function HomeScreen(){

  const [products, setProducts] =useState([]);
  
  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await axios.get('http://localhost:5000/api/products')
      setProducts(response.data);
     };
     
    fetchData();
  },[])
  return(
    <div>
<h1>featured products</h1>
    <div className="products">
      {products?.map((product)=>(
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