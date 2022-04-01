import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <div className='grid-container'>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart' element={<CartScreen />} />
            <Route path='/cart/:id' element={<CartScreen />} />
            <Route path='/signin' element={<SigninScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/shipping' element={<PrivateRoute><ShippingAddressScreen /></PrivateRoute>} />
            <Route path='/payment' element={<PrivateRoute><PaymentMethodScreen /></PrivateRoute>} />
            <Route path='/placeorder' element={<PrivateRoute><PlaceOrderScreen /></PrivateRoute>} />
            <Route path='/order/:id' element={<PrivateRoute><OrderScreen/></PrivateRoute>} />
            <Route path='/orderhistory' element={<PrivateRoute><OrderHistoryScreen/></PrivateRoute>} />
            <Route path='/profile' element={<PrivateRoute><ProfileScreen/></PrivateRoute>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
