import React, { Fragment } from 'react'
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import Header from './header'
import Alert from 'component/Alert'
import sucMask from 'component/sucMask'
import { resetpassword } from "server/api";

class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            old_password: '',
            new_password: '',
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

        if (this.state.new_password != this.state.confirm_password) {
            this.setState({
                diff: true,
            })
            return false;
        }

        let params = {
            old_password: this.state.old_password,
            new_password: this.state.new_password,
            confirm_password: this.state.confirm_password,
        }
        resetpassword(params).then(res => {
            if (res.status == 'success') {
                Alert.show({
                    type: 'success',
                    message: res.message
                })
                this.setState({
                    old_password: '',
                    new_password: '',
                    confirm_password: '',
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
            <React.Fragment>
                <Header />
                <section className="section-profile-cover section-shaped my-0">
                    <div className="shape shape-style-1 shape-primary shape-skew alpha-4">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </section>
                <section className="section section-skew py-0">
                    <div className="container mt--400">
                        <div className="col-lg-5 m-auto">
                            <div className="card bg-secondary shadow border-0">
                                <div className="card-header bg-white pb-3">
                                    <div className="text-muted text-center mb-1">
                                        修改密码
                                    </div>
                                </div>
                                <div className="card-body px-lg-5 py-lg-5">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group mb-3">
                                            <div className="input-group input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                                </div>
                                                <input
                                                    className="form-control"
                                                    type="password"
                                                    placeholder="请输入原密码"
                                                    value={this.state.old_password}
                                                    onChange={(e) => this.handleInputChange('old_password', e)}
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
                                                    placeholder="请输入新密码"
                                                    value={this.state.new_password}
                                                    onChange={(e) => this.handleInputChange('new_password', e)}
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
                                                    className="form-control is-invalid"
                                                    type="password"
                                                    placeholder="请确认新密码"
                                                    value={this.state.confirm_password}
                                                    onChange={(e) => this.handleInputChange('confirm_password', e)}
                                                    required
                                                />
                                            </div>
                                            {this.state.diff ? <div className="invalid-feedback"> 2次输入的密码不一致 </div> : null }
                                            
                                        </div>

                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary my-4">确 认</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default ForgotPassword