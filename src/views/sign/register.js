import React from 'react'
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import Wrapper from './Wrapper'


class RegisterForm extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    render () {
        return (
            <div className="col-lg-5">
                <div className="card bg-secondary shadow border-0">
                    <div className="card-header bg-white pb-3">
                        <div className="text-muted text-center">
                            <small>注册新账号</small>
                        </div>
                    </div>
                    <div className="card-body px-lg-5 py-lg-5">

                        <form role="form">
                            <div className="form-group">
                                <div className="input-group input-group-alternative mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="ni ni-hat-3"></i></span>
                                    </div>
                                    <input className="form-control" placeholder="昵称" type="text" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group input-group-alternative mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                                    </div>
                                    <input className="form-control" placeholder="翼支付邮箱" type="email" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group input-group-alternative">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                    </div>
                                    <input className="form-control" placeholder="密码" type="password" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group input-group-alternative">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                    </div>
                                    <input className="form-control" placeholder="确认密码" type="password" />
                                </div>
                            </div>

                            <div className="text-center">
                                <button type="button" className="btn btn-primary m-4">注册账号</button>
                            </div>
                            <div className="text-muted text-center font-italic">
                                <small>已有账号？
                                    <Link to={'/login'} className="text-success font-weight-700">去登录</Link>
                                </small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

class Register extends React.Component {
    render() {
        return (
            <Wrapper>
                <RegisterForm />
            </Wrapper>
        )
    }
}

export default Register