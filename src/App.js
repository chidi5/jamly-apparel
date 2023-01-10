import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import ProductScreen from './screens/ProductScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import CollectionProductScreen from './screens/CollectionProductScreen';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />} exact/>
          <Route path='/:id' element={<ProductListScreen />} />
          <Route path='/product/all' element={<ProductScreen />} exact/>
          <Route path='/product/:id' element={<ProductDetailScreen />} />
          <Route path='/product/collection/:id' element={<CollectionProductScreen />} />
          <Route path='/checkout' element={<CheckoutScreen />} exact />
          <Route path="login" element={<LoginScreen />} />
          <Route path='register' element={<RegisterScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
