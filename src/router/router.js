// import Home from '../views/home'
import Login from '../views/sign/login'
import Register from '../views/sign/register'
import ForgotPassword from '../views/sign/forgotPassword'
import List from '../views/list'
import Addapi from '../views/addapi'

const router = [
    { path: "/", component: List },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/forgotPassword", component: ForgotPassword },
    { path: "/list", component: List },
    { path: "/addapi", component: Addapi },
];

export default router