import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Orders from "./pages/orders/orders";
import Login from "./pages/Login";
import OrderSummary from "./pages/orderSummary/orderSummay";
import OrderDetails from "./components/orderDetails/orderDetails";
import { store } from './redux/store';
function App() {
  //const state = store.getState();
  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).isAdmin
  //const admin = false
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        {admin ?
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
              <Route path="/orders">
                <Orders />
              </Route>
              <Route path="/OrderSummary">
                <OrderSummary />
              </Route>
              <Route path="/orderDetails">
                <OrderDetails />
              </Route>

            </div>
          </> : <Redirect to="/login" />
        }
      </Switch>
    </Router>
  );
}

export default App;
