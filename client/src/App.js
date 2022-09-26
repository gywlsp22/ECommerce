import './App.css';
import {BrowserRouter, Route, Routes,Link} from 'react-router-dom'
import { toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HomeScreen from './screeen/HomeScreen';
import ProductScreen from './screeen/ProdctScreen';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';
import { useContext, useEffect ,useState} from 'react';
import { StoreContext } from './Store';
import Badge from 'react-bootstrap/esm/Badge';
import CartScreen from './screeen/CartScreen';
import SigninScreen from './screeen/SigninScreen';
import SignupScreen from './screeen/SignupScreen';
import ShippingAddressScreen from './screeen/ShippingAddressScreen';
import PaymentMethodScreen from './screeen/PaymentMethodScreen';
import PlaceOrderScreen from './screeen/PlaceOrderScreen';
import OrderScreen from './screeen/OrderScreen';
import OrderHistoryScreen from './screeen/OrderHistoryScreen';
import ProfileScreen from './screeen/ProfileScreen';
import Button from 'react-bootstrap/esm/Button';
import axios from 'axios';
import { getError } from './utils';
import SearchBox from './components/SearchBox';




function App() {
  const { state, dispatch: ctxDispatch } = useContext(StoreContext);
  const { cart, userInfo} = state;

  const signoutHandler =()=>{
    ctxDispatch({type:'USER_SIGNOUT'});
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  }


  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    const fetchCategories = async ()=>{
      try{
        const {data} = await axios.get(`http://localhost:5000/api/products/categories`);
        setCategories(data);
      } catch (err){
        toast.error(getError(err));
        
      }
    };
    fetchCategories();
  },[]);

  return (
    <BrowserRouter>
     <div className={
      sidebarIsOpen
      ? "d-flex flex-column site-container active-cont"
      :"d-flex flex-column site-container "
     }>
      <ToastContainer position='bottom-center' limit={1}/>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Button 
            variant='dark'
            onClick={()=> setSidebarIsOpen(!sidebarIsOpen)}
            >
              <i className='fas fa-bars'></i>
            </Button>
            <LinkContainer to="/">
            <Navbar.Brand>amazon</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse  id="basic-navbar-nav">
              <SearchBox />
            <Nav className="me-auto w-100 justify-content-end" >
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

            </Navbar.Collapse>
          </Container>
        </Navbar>
       
      </header>
    
      <div
          className={
            sidebarIsOpen
              ? 'active-nav side-navbar d-flex justify-content-between flex-wrap flex-column'
              : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
          }
        >
          <Nav className="flex-column text-white w-100 p-2">
            <Nav.Item>
              <strong>Categories</strong>
            </Nav.Item>
            {categories.map((category) => (
              <Nav.Item key={category}>
                <LinkContainer
                  to={`/search?category=${category}`}
                  onClick={() => setSidebarIsOpen(false)}
                >
                  <Nav.Link>{category}</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            ))}
          </Nav>
        </div>
    
    
    
      <main>
        <Container className="mt-5">
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen />}/>
          <Route path="/cart" element={<CartScreen />}/>
          <Route path="/signin" element={<SigninScreen />}/>
          <Route path="/signup" element={<SignupScreen />}/>
          <Route path="/profile" element={<SignupScreen />}/>
          <Route path="/profile" element={<ProfileScreen />}/>
          <Route path="/shipping" element={<ShippingAddressScreen />}/>
          <Route path="/payment" element={<PaymentMethodScreen />}/>
          <Route path="/placeorder" element={<PlaceOrderScreen />}/>
          <Route path="/orders/:id" element={<OrderScreen />}/>
          <Route path="/orderhistory" element={<OrderHistoryScreen />}/>


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
