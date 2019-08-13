import Home from '../views/home'
import Login from '../views/login'
import Register from '../views/register'
import ForgotPassword from '../views/forgotPassword'

const router = [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/forgotPassword", component: ForgotPassword },
];

export default router