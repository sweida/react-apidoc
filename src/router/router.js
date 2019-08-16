// import Home from '../views/home'
import Login from 'pages/sign/login'
import Register from 'pages/sign/register'
import ForgotPassword from 'pages/sign/forgotPassword'
import ChangePassword from 'pages/changePassword'
import List from 'pages/list'
import Addapi from 'pages/addapi'

const router = [
    { path: "/", component: List, auth: true },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/forgotPassword", component: ForgotPassword },
    { path: "/changePassword", component: ChangePassword },
    { path: "/list", component: List, auth: true },
    { path: "/addapi", component: Addapi, auth: true },
];

export default router