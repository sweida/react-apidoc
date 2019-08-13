import React, { Component } from 'react'

import ReactDOM from 'react-dom';




class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            {Login}
        );
    }
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
);


const App = React.createClass({
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})



const Login = (
    <main>
        <section class="section section-shaped section-lg my-0">
            {App}
            <div class="container pt-lg-md">
                <div class="row justify-content-center">
                    <div class="col-lg-5">
                        <div class="card bg-secondary shadow border-0">
                            <div class="card-header bg-white pb-5">
                                <div class="text-muted text-center mb-3">
                                    <small>使用下面方式登录</small>
                                </div>
                                <div class="btn-wrapper text-center">
                                    <a href="javascript:;" class="btn btn-neutral btn-icon">
                                        <span class="btn-inner--icon">
                                            <img src="assets/img/icons/common/github.svg" alt="">
                    </span>
                                            <span class="btn-inner--text">Github</span>
                  </a>
                                        <a href="javascript:;" class="btn btn-neutral btn-icon">
                                            <span class="btn-inner--icon">
                                                <img src="assets/img/icons/common/google.svg" alt="">
                    </span>
                                                <span class="btn-inner--text">Google</span>
                  </a>
                </div>
              </div>
                                    <div class="card-body px-lg-5 py-lg-5">
                                        <div class="text-center text-muted mb-4">
                                            <small>或者使用账号登录</small>
                                        </div>

                                        <form role="form" on: submit|preventDefault={loginSubmit}>
                  <div class="form-group mb-3">
                                            <div class="input-group input-group-alternative">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                                </div>
                                                <input class="form-control" placeholder="username" bind: value={name} type="text" required>
                    </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group input-group-alternative">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                                </div>
                                                <input class="form-control" placeholder="Password" bind: value={password} type="password" required>
                    </div>
                                        </div>
                                        <div class="custom-control custom-control-alternative custom-checkbox">
                                            <input class="custom-control-input" id=" customCheckLogin" type="checkbox">
                                                <label class="custom-control-label" for=" customCheckLogin">
                                                    <span>记住密码</span>
                                                </label>
                  </div>
                                            <div class="text-center">
                                                <button type="submit" class="btn btn-primary my-4">登 录</button>
                                            </div>
                </form>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-6">
                                        <a href="forgotpassword" class="text-light">
                                            <small>忘记密码?</small>
                                        </a>
                                    </div>
                                    <div class="col-6 text-right">
                                        <a href="register" class="text-light">
                                            <small>去注册</small>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </section>
  </main>
);
