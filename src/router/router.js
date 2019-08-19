// import Home from '../views/home'
import Login from 'pages/sign/login'
import Register from 'pages/sign/register'
import ForgotPassword from 'pages/sign/forgotPassword'
import ChangePassword from 'pages/changePassword'
import List from 'pages/list'
import Addapi from 'pages/addapi'
import Myapi from 'pages/myapi'
import Projects from 'pages/projects'

const router = [
    { path: "/", component: List, auth: true },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/forgotPassword", component: ForgotPassword },
    { path: "/changePassword", component: ChangePassword },
    { path: "/list", component: List, auth: true },
    { path: "/addapi", component: Addapi, auth: true },
    { path: "/myapi", component: Myapi, auth: true },
    { path: "/projects", component: Projects, auth: true },
];

export default router