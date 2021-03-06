// import Home from '../views/home'
import Login from 'pages/sign/login'
import Register from 'pages/sign/register'
import ForgotPassword from 'pages/sign/forgotPassword'
import ChangePassword from 'pages/changePassword'
import apiList from 'pages/apiList'
import Addapi from 'pages/addapi'
import Myapi from 'pages/myapi'
import Projects from 'pages/projects'
import DeleteList from 'pages/deleteList'
import Host from 'pages/host'
import Routines from 'pages/routines/index'
import CheckIdcard from 'pages/routines/checkIdcard'
import CreatedIdcard from 'pages/routines/createdIdcard'
import License from "pages/routines/license";
import Bankcard from "pages/routines/bankcard";
// import Generator from "pages/routines/generator";
import Teams from "pages/teams";

const router = [
    { path: "/", component: Projects, auth: true },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/forgotPassword", component: ForgotPassword },
    { path: "/changePassword", component: ChangePassword, auth: true },
    // { path: "/list", component: List, auth: true },
    { path: "/projects/:id", component: apiList, auth: true },
    { path: "/projects/:id/addapi", component: Addapi, auth: true },
    { path: "/projects/:id/edit/:apiid", component: Addapi, auth: true },
    { path: "/addapi", component: Addapi, auth: true },
    { path: "/myapi", component: Myapi, auth: true },
    { path: "/projects", component: Projects, auth: true },
    { path: "/deleteList", component: DeleteList, auth: true, admin: true },
    { path: "/host", component: Host, auth: true },
    { path: "/routines", component: Routines, auth: true },
    { path: "/checkIdcard", component: CheckIdcard, auth: true },
    { path: "/createdIdcard", component: CreatedIdcard, auth: true },
    { path: "/license", component: License, auth: true },
    { path: "/bankcard", component: Bankcard, auth: true },
    // { path: "/generator", component: Generator, auth: true },
    { path: "/teams", component: Teams, auth: true, admin: true }
];

export default router