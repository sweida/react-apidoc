// import Home from '../views/home'
import Login from 'pages/sign/login'
import Register from 'pages/sign/register'
import ForgotPassword from 'pages/sign/forgotPassword'
import ChangePassword from 'pages/changePassword'
import List from 'pages/list'
import Addapi from 'pages/addapi'
import Myapi from 'pages/myapi'
import Projects from 'pages/projects'
import DeleteList from 'pages/deleteList'
import Host from 'pages/host'
import ErrorCode from 'pages/errorCode'
import Routine from 'pages/routine'
import CheckIdcard from 'pages/checkIdcard'
import CreatedIdcard from 'pages/createdIdcard'

const router = [
    { path: "/", component: Projects, auth: true },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/forgotPassword", component: ForgotPassword },
    { path: "/changePassword", component: ChangePassword },
    // { path: "/list", component: List, auth: true },
    { path: "/projects/:id", component: List, auth: true },
    { path: "/projects/:id/addapi", component: Addapi, auth: true },
    { path: "/projects/:id/edit/:apiid", component: Addapi, auth: true },
    { path: "/addapi", component: Addapi, auth: true },
    { path: "/myapi", component: Myapi, auth: true },
    { path: "/projects", component: Projects, auth: true },
    { path: "/deleteList", component: DeleteList, auth: true },
    { path: "/host", component: Host, auth: true },
    { path: "/errorCode", component: ErrorCode, auth: true },
    { path: "/routine", component: Routine, auth: true },
    { path: "/checkIdcard", component: CheckIdcard, auth: true },
    { path: "/createdIdcard", component: CreatedIdcard, auth: true },
];

export default router