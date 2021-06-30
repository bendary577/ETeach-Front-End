import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Screens/Home";
import SignUp from "./Screens/SignUp";
import SignUpAs from "./Screens/SignUpAs";
import ForgetPassword from './Screens/ForgetPassword';
import Account from './Screens/Account';
import EditProfile from "./Screens/EditProfile";
import MakeComplaint from './Screens/MakeComplaint';
import BuyItem from './Screens/BuyItem';
import MyOrders from './Screens/MyOrders';
import OrderDetails from './Screens/OrderDetails';
import MyCart from './Screens/MyCart';
import CreateStore from './Screens/CreateStore';
import Uploaditem from './Screens/Uploaditem';
import MyInvoices from './Screens/MyInvoices';
import MakeInvoice from './Screens/MakeInvoice';
import ViewItemDetails from './Screens/ViewItemDetails';
import SellerProfile from './Screens/SellerProfile';
import CoursesLibrary from './Screens/CoursesLibrary';
import SellerStore from './Screens/SellerStore';
import SigninPage from './Screens/SigninPage';
import AdminDashBoard from './Screens/AdminDashBoard';
import Search from './Screens/Search';
import Notifications from './Screens/Notifications';
import ForgotPasswordConfirmation from './Screens/ForgotPasswordConfirmation';
import './App.css';
import UpdatePassword from './Screens/UpdatePassword';
import CourseView from './Screens/CourseView';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route exact path="/signin">
                        <SigninPage />
                    </Route>

                    <Route exact path="/signup">
                        <SignUp />
                    </Route>

                    <Route exact path="/registeras">
                        <SignUpAs />
                    </Route>

                    <Route exact path="/forgetpassword">
                        <ForgetPassword />
                    </Route>

                    <Route exact path="/profile">
                        <Account />
                    </Route>

                    <Route exact path="/editprofile">
                        <EditProfile />
                    </Route>

                    <Route exact path="/complaint">
                        <MakeComplaint />
                    </Route>

                    <Route exact path="/buyitem">
                        <BuyItem />
                    </Route>

                    <Route exact path="/myorders">
                        <MyOrders />
                    </Route>

                    <Route exact path="/orderDetails">
                        <OrderDetails />
                    </Route>

                    <Route exact path="/mycart">
                        <MyCart />
                    </Route>

                    <Route exact path="/mystore">
                        <SellerStore />
                    </Route>

                    <Route exact path="/createstore">
                        <CreateStore />
                    </Route>

                    <Route exact path="/home">
                        <Home />
                    </Route>

                    <Route exact path="/viewitem">
                        <ViewItemDetails />
                    </Route>

                    <Route exact path="/uploaditem">
                        <Uploaditem />
                    </Route>

                    <Route exact path="/makeinvoice">
                        <MakeInvoice />
                    </Route>

                    <Route exact path="/myinvoices">
                        <MyInvoices />
                    </Route>

                    <Route exact path="/sellerProfile">
                        <SellerProfile />
                    </Route>

                    <Route exact path="/courses_library">
                        <CoursesLibrary />
                    </Route>

                    <Route exact path="/mystore">
                        <SellerStore />
                    </Route>

                    <Route exact path="/admin">
                        <AdminDashBoard />
                    </Route>

                    <Route exact path="/search">
                        <Search />
                    </Route>

                    <Route exact path="/notifications">
                        <Notifications />
                    </Route>

                    <Route exact path="/confirm_code">
                        <ForgotPasswordConfirmation />
                    </Route>

                    <Route exact path="/update_password">
                        <UpdatePassword />
                    </Route>

                    <Route exact path="/view_store">
                        <CourseView />
                    </Route>

                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
