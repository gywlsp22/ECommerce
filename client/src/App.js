import './App.css';
import {BrowserRouter, Route, Routes,Link} from 'react-router-dom'
import HomeScreen from './screeen/HomeScreen';
import ProductScreen from './screeen/ProdctScreen';




function App() {
  return (
    <BrowserRouter>
     <div>
      <header>
       <Link to="/">amazon</Link>
      </header>
      <main>
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen />}/>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
