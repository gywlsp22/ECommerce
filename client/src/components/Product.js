
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Rating from './Rating';
import { StoreContext } from '../Store';
import {useState ,useContext} from 'react'

function Product(props){
  const {product}=props;

  const {state,dispatch:ctxDispatch} =useContext(StoreContext);
  const addToCartHandler =()=>{
  ctxDispatch({
    type:'CART_ADD_ITEM',
    payload :{...product, quantity:1},
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
      <Button  onClick={addToCartHandler} className='btn'>Add to cart</Button>
     </Card.Body>
     
     </Card>
  
  )
}
export default Product