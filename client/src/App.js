import './App.css';
import {BrowserRouter, Route, Routes,Link} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HomeScreen from './screeen/HomeScreen';
import ProductScreen from './screeen/ProdctScreen';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';
import { useContext } from 'react';
import { StoreContext } from './Store';
import Badge from 'react-bootstrap/esm/Badge';
import CartScreen from './screeen/CartScreen';
import SigninScreen from './screeen/SigninScreen';
import SignupScreen from './screeen/SignupScreen';
import ShippingAddressScreen from './screeen/ShippingAddressScreen';
import PaymentMethodScreen from './screeen/PaymentMethodScreen';
import PlaceOrderScreen from './screeen/PlaceOrderScreen';
import OrderScreen from './screeen/OrderScreen';



function App() {
  const { state, dispatch: ctxDispatch } = useContext(StoreContext);
  const { cart, userInfo} = state;

  const signoutHandler =()=>{
    ctxDispatch({type:'USER_SIGNOUT'});
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
  }

  return (
    <BrowserRouter>
     <div className="d-flex flex-column site-container">
      <ToastContainer position='bottom-center' limit={1}/>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
            <Navbar.Brand>amazon</Navbar.Brand>
            </LinkContainer>
            <Nav className="me-auto">
              <Link to="/cart" className='nav-link'>
                  Cart
                  {  cart.cartItems.length >0 &&(
                      <Badge pill bg="danger">{cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )  
                 }
              </Link>
              {userInfo? (
                <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                     <LinkContainer to="/profile">
                      <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link className='dropdown-item' to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                </NavDropdown>
              ):(
                <Link className="nav-link" to="/signin">
                  Sign In
                </Link>
              )}
            </Nav>
          </Container>
        </Navbar>
       
      </header>
      <main>
        <Container className="mt-5">
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen />}/>
          <Route path="/cart" element={<CartScreen />}/>
          <Route path="/signin" element={<SigninScreen />}/>
          <Route path="/signup" element={<SignupScreen />}/>
          <Route path="/shipping" element={<ShippingAddressScreen />}/>
          <Route path="/payment" element={<PaymentMethodScreen />}/>
          <Route path="/placeorder" element={<PlaceOrderScreen />}/>
          <Route path="/orders/:id" element={<OrderScreen />}/>

          <Route path="/" element={<HomeScreen />} />
        </Routes>
        </Container>
      </main>

      <footer>
        <div className='text-center'>All rights reserved</div>
      </footer>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
