import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { logout } from 'server/api'
import Alert from 'component/Alert'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginStatus: true
        };
    }
    LogoutHandle = () => {
        logout().then(res => {
            if (res.status == 'success') {
                localStorage.removeItem('user')
                localStorage.removeItem('token')
                this.setState({
                    loginStatus: false
                })
                Alert.show({
                    type: 'success',
                    message: res.message
                })
            } else {
                Alert.show({
                    type: 'error',
                    message: res.message
                })
            }
        })
    }
    render() {
        if (!this.state.loginStatus) {
            return <Redirect push to="/login" />
        }
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-default">
                <div className="container">
                    <a className="navbar-brand" href="#">天翼保理api接口文档</a>

                    <Link to="/projects" className="btn btn-3 btn-icon btn-info">
                        <span className="btn-inner--icon">
                            <i className="ni ni-atom"></i>
                        </span>
                        <span className="btn-inner--text">项目列表</span>
                    </Link>
                    {/* <Link to="/addapi" className="btn btn-3 btn-icon btn-primary">
                        <span className="btn-inner--icon">
                            <i className="ni ni-atom"></i>
                        </span>
                        <span className="btn-inner--text">新增接口</span>
                    </Link> */}

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-default">
                        <div className="navbar-collapse-header">
                            <div className="row">
                                <div className="col-6 collapse-brand">
                                    <a href="./index.html">
                                        <img alt="" src="/assets/img/brand/blue.png" />
                                    </a>
                                </div>
                                <div className="col-6 collapse-close">
                                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <ul className="navbar-nav ml-lg-auto">
                            <li className="nav-item">
                                <Link className="nav-link nav-link-icon" to="login">
                                    <i className="ni ni-favourite-28"></i>
                                    <span className="nav-link-inner--text d-lg-none">Discover</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-link-icon" to="#">
                                    <i className="ni ni-notification-70"></i>
                                    <span className="nav-link-inner--text d-lg-none">Profile</span>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link nav-link-icon" to="#" id="navbar-default_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="ni ni-circle-08"></i>
                                    <span className="nav-link-inner--text d-lg-none">Settings</span>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
                                    <Link to="/myapi" className="dropdown-item">
                                        <i className="ni ni-planet"></i>
                                        我添加的API
                                    </Link>
                                    <Link to="/deleteList" className="dropdown-item">
                                        <i className="ni ni-atom"></i>
                                        已删除的API
                                    </Link>
                                    <Link to="/changePassword" className="dropdown-item">
                                        <i className="ni ni-settings-gear-65"></i>
                                        修改密码
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="#" onClick={this.LogoutHandle}>
                                        <i className="ni ni-user-run"></i>
                                        退出登录
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}



export default Header;