
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Rating from './Rating';

function Product(props){
  const {product}=props;
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
      <Button className='btn'>Add to cart</Button>
     </Card.Body>
     
     </Card>
  
  )
}
export default Product