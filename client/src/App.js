import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Ordersscreen from './screens/OrdersScreen';
import Pizzaslist from './screens/Pizzaslist';
import Adminpanel from './screens/AdminPanel';
import Orderslist from './screens/Orderslist';
import Addpizza from './screens/Addpizza';
import Userslist from './screens/Userslist';
import Editpizza from './screens/Editpizza.js';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/cart" exact element={<CartScreen />} />
          <Route path="/register" exact element={<RegisterScreen />} />
          <Route path="/login" exact element={<LoginScreen />} />
          <Route path="/orders" exact element={<Ordersscreen />}/>
          <Route path="/admin" exact element={<Adminpanel />} />
          <Route path="/admin/pizzaslist" exact element={<Pizzaslist />} />
          <Route path="/admin/orderslist" exact element={<Orderslist />} />
          <Route path="/admin/addpizza" exact element={<Addpizza />} />
          <Route path="/admin/userslist" exact element={<Userslist />} />
          <Route path="/admin/editpizza/:pizzaid" exact element={<Editpizza />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
