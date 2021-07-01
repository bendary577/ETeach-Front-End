import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Screens/Home";
import SignUp from "./Screens/SignUp";
import ForgetPassword from './Screens/ForgetPassword';
import Account from './Screens/Account';
import MakeComplaint from './Screens/MakeComplaint';
import Categories from './Screens/Categories';
import MyCourses from './Screens/MyCourses';
import UploadCourse from './Screens/UploadCourse';
import CoursesLibrary from './Screens/CoursesLibrary';
import SigninPage from './Screens/SigninPage';
import Search from './Screens/Search';
import Notifications from './Screens/Notifications';
import ForgotPasswordConfirmation from './Screens/ForgotPasswordConfirmation';
import './App.css';
import UpdatePassword from './Screens/UpdatePassword';
import CourseView from './Screens/CourseView';
import LessonView from './Screens/LessonView';
import GetRequestRegistrationCode from './Screens/GetRequestRegistrationCode';
import { AuthenticationProvider } from './Context/AuthenticationContext';

class App extends Component {
    render() {
        return (
            <AuthenticationProvider >
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

                    <Route exact path="/forgetpassword">
                        <ForgetPassword />
                    </Route>

                    <Route exact path="/profile">
                        <Account />
                    </Route>

                    <Route exact path="/complaint">
                        <MakeComplaint />
                    </Route>

                    <Route exact path="/my_courses">
                        <MyCourses />
                    </Route>

                    <Route exact path="/home">
                        <Home />
                    </Route>

                    <Route exact path="/upload_course">
                        <UploadCourse />
                    </Route>

 
                    <Route exact path="/courses_library">
                        <CoursesLibrary />
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

                    <Route exact path="/view_course">
                        <CourseView />
                    </Route>

                    <Route exact path="/view_lesson">
                        <LessonView />
                    </Route>

                    <Route exact path="/get_course_code">
                        <GetRequestRegistrationCode />
                    </Route>

                    <Route exact path="/categories">
                        <Categories />
                    </Route>


                </Switch>
            </BrowserRouter>
        </AuthenticationProvider>
        );
    }
}

export default App;
