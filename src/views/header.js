import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { logout } from 'server/api'
import Alert from 'component/Alert'
import { connect } from 'react-redux'
import { logoutAction } from 'actions/actionCreators'
import history from "router/history";
import logo from "assets/img/brand/blue.png"

@connect(
    (state) => ({userInfo: state.user.userInfo}),
    { logoutAction }
)

class Header extends React.Component {
    LogoutHandle = () => {
        logout().then(res => {
            if (res.status == 'success') {
                this.props.logoutAction()
                history.push('/login');
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
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-default">
                <div className="container">
                    <Link className="navbar-brand" to="#">天翼保理api接口文档</Link>

                    <Link to="/projects" className="btn btn-3 btn-icon btn-info">
                        <span className="btn-inner--icon">
                            <i className="ni ni-atom"></i>
                        </span>
                        <span className="btn-inner--text">项目列表</span>
                    </Link>
                    <Link to="/host" className="btn btn-3 btn-icon btn-primary">
                        <span className="btn-inner--icon">
                            <i className="ni ni-atom"></i>
                        </span>
                        <span className="btn-inner--text">环境入口</span>
                    </Link>
                    <Link to="/routine" className="btn btn-3 btn-icon btn-primary">
                        <span className="btn-inner--icon">
                            <i className="ni ni-atom"></i>
                        </span>
                        <span className="btn-inner--text">小功能</span>
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-default">
                        <div className="navbar-collapse-header">
                            <div className="row">
                                <div className="col-6 collapse-brand">
                                    <a href="./index.html">
                                        <img alt="" src={logo} />
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
                            <li className="nav-item dropdown">
                                <Link className="nav-link nav-link-icon" to="#" id="navbar-default_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="mr-1">{this.props.userInfo && this.props.userInfo.name}</span>
                                    <i className="ni ni-circle-08"></i>
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



export default Header