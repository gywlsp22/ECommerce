import './App.css';
import {BrowserRouter, Route, Routes,Link} from 'react-router-dom'
import HomeScreen from './screeen/HomeScreen';
import ProductScreen from './screeen/ProdctScreen';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';





function App() {
  return (
    <BrowserRouter>
     <div className="d-flex flex-column site-container">
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
            <Navbar.Brand>amazon</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
       
      </header>
      <main>
        <Container className="mt-5">
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen />}/>
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
