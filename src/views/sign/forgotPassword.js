import React from 'react'
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import Wrapper from './Wrapper'


class PasswordForm extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (
            <div className="col-lg-5">
                <div className="card bg-secondary shadow border-0">
                    <div className="card-header bg-white pb-1">
                        <div className="text-muted text-center mb-2">
                            <small>通过邮件重置密码</small>
                        </div>
                        <div className="card-body px-lg-4 py-lg-4">
                        <form role="form">
                            <div className="form-group mb-3">
                            <div className="input-group input-group-alternative">
                                <div className="input-group-prepend">
                                <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                                </div>
                                <input className="form-control" placeholder="请输入注册时的邮箱地址" type="email" />
                            </div>
                            </div>
                            <div className="text-center">
                            <button type="button" className="btn btn-primary mt-3">发送邮件验证码</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div className="card-body px-lg-5 py-lg-5">
                        <form role="form">
                            <div className="form-group mb-3">
                                <div className="input-group input-group-alternative">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                                </div>
                                <input className="form-control" placeholder="验证码" type="number" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group input-group-alternative">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                </div>
                                <input className="form-control" placeholder="新密码" type="password" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group input-group-alternative">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                </div>
                                <input className="form-control" placeholder="确认新密码" type="password" />
                                </div>
                            </div>

                            <div className="text-center">
                                <button type="button" className="btn btn-primary my-3">确 认</button>
                            </div>
                        </form>
                        <div className="text-muted text-center font-italic">
                            <small>
                                <Link to="login" className="text-success font-weight-700">去登录</Link>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


class ForgotPassword extends React.Component {
    render() {
        return (
            <Wrapper>
                <PasswordForm />
            </Wrapper>
        )
    }
}
export default ForgotPassword