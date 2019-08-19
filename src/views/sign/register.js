import React from 'react'
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import Wrapper from './Wrapper'
import Alert from 'component/Alert'
import { register } from "server/api";

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirm_password: '',
            diff: false,
        }
    }
    handleInputChange = (name, e) => {
        this.setState({
            [name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            diff: false,
        })

        if (this.state.password != this.state.confirm_password) {
            this.setState({
                diff: true,
            })
            return false;
        }

        let params = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        }
        register(params).then(res => {
            if (res.status == 'success') {
                Alert.show({
                    title: '提 示',
                    message: '注册成功！！'
                })
                this.setState({
                    name: '',
                    email: '',
                    password: '',
                    confirm_password: '',
                })
            }
        })
    }
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

                        <form role="form" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <div className="input-group input-group-alternative mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="ni ni-hat-3"></i></span>
                                    </div>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="请输入昵称"
                                        value={this.state.name}
                                        onChange={(e) => this.handleInputChange('name', e)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group input-group-alternative mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                                    </div>
                                    <input
                                        className="form-control"
                                        type="email"
                                        placeholder="请输入邮箱"
                                        value={this.state.email}
                                        onChange={(e) => this.handleInputChange('email', e)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group input-group-alternative">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                    </div>
                                    <input
                                        className="form-control"
                                        type="password"
                                        placeholder="请输入密码"
                                        value={this.state.password}
                                        onChange={(e) => this.handleInputChange('password', e)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group input-group-alternative">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                    </div>
                                    <input
                                        className="form-control"
                                        type="password"
                                        placeholder="请确认密码"
                                        value={this.state.confirm_password}
                                        onChange={(e) => this.handleInputChange('confirm_password', e)}
                                        required
                                    />
                                </div>
                                
                                {this.state.diff ? <div className="invalid-feedback"> 2次输入的密码不一致 </div> : null}

                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-primary m-4">注册账号</button>
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