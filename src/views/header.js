import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <HeaderContoller />
        )
    }
}



function HeaderContoller() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-default">
            <div className="container">
                <a className="navbar-brand" href="#">天翼保理api接口文档</a>
                <a href="/" className="btn btn-3 btn-icon btn-info">
                    <span className="btn-inner--icon">
                        <i className="ni ni-atom"></i>
                    </span>
                    <span className="btn-inner--text">api接口列表</span>
                </a>
                <a href="addapi" className="btn btn-3 btn-icon btn-primary">
                    <span className="btn-inner--icon">
                        <i className="ni ni-atom"></i>
                    </span>
                    <span className="btn-inner--text">新增接口</span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-default">
                    <div className="navbar-collapse-header">
                        <div className="row">
                            <div className="col-6 collapse-brand">
                                <a href="./index.html">
                                    <img alt="" src="./assets/img/brand/blue.png" />
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
                            <a className="nav-link nav-link-icon" href="#">
                                <i className="ni ni-favourite-28"></i>
                                <span className="nav-link-inner--text d-lg-none">Discover</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-icon" href="#">
                                <i className="ni ni-notification-70"></i>
                                <span className="nav-link-inner--text d-lg-none">Profile</span>
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link nav-link-icon" href="#" id="navbar-default_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="ni ni-circle-08"></i>
                                <span className="nav-link-inner--text d-lg-none">Settings</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
                                <a className="dropdown-item" href="#">
                                    <i className="ni ni-planet"></i>
                                    我添加的接口</a>
                                <a className="dropdown-item" href="#">
                                    <i className="ni ni-settings-gear-65"></i>
                                    修改密码
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">
                                    <i className="ni ni-user-run"></i>
                                    退出登录
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Header;