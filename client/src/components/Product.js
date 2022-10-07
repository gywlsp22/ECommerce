import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Rating from './Rating';
import { StoreContext } from '../Store';
import {useContext} from 'react'
import axios from 'axios';

 function Product(props){
  const {product}=props;

  const {state, dispatch:ctxDispatch}=useContext(StoreContext);
  const{
    cart: {cartItems},
  }=state;

  const addToCartHandler =async (item)=>{
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const {data} =await axios.get(`http://localhost:5000/api/products/${item._id}`);
    if(data.countInStock<quantity){
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload:{...item,quantity},
    });
  }
  
  
  
  
  


  return(
    <Card>
     <Link to={`/product/${product.slug}`}>
       <img src={product.image} className="Card-img-top" alt={product.name}/>
     </Link>
     <Card.Body>
      <Link to={`/product/${product.slug}`}>
         <Card.Title> <p>{product.name}</p></Card.Title>
      </Link>
      <Rating  rating={product.rating} numReviews={product.numReviews}/>
      <Card.Text>
      ${product.price}
      </Card.Text>
      {
        product.countInStock ===0? 
        <Button variant="light" >Out of stock</Button>
        :
        <Button  onClick={()=>addToCartHandler(product)} className='btn'>Add to cart</Button>
      }
     </Card.Body>
     
     </Card>
  
  )
}
export default Product;