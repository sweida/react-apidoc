import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from './Wrapper'
import { login } from 'server/api'
import Alert from 'component/Alert'
import github from 'assets/img/icons/common/github.svg'
import google from 'assets/img/icons/common/google.svg'
import history from "router/history";
import { connect } from 'react-redux'
import { loginAction, getUserInfo } from 'actions/actionCreators'
import store from 'store/index'


@connect(
    null,
    { loginAction, getUserInfo }
)

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
        }
    }
    handleInputChange = (name, e) => {
        this.setState({
            [name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let params = {
            name: this.state.name,
            password: this.state.password,
        }
        this.props.loginAction(params).then(res => {
            if (res.status == 'success') {
                history.push('/projects');
                Alert.show({
                    message: '登录成功，欢迎回来！！'
                })
                this.props.getUserInfo()
            } else {
                Alert.show({
                    type: 'error',
                    message: res.message
                })
            }
        })
    }

    render() {
        const loginForm = (
            <div className="col-lg-5">
                <div className="card bg-secondary shadow border-0">
                    <div className="card-header bg-white pb-5">
                        <div className="text-muted text-center mb-3">
                            <small>使用下面方式登录</small>
                        </div>
                        <div className="btn-wrapper text-center">
                            <a href="#" className="btn btn-neutral btn-icon">
                                <span className="btn-inner--icon">
                                    <img src={github} alt="" />
                                </span>
                                <span className="btn-inner--text">Github</span>
                            </a>
                            <a href="#" className="btn btn-neutral btn-icon">
                                <span className="btn-inner--icon">
                                    <img src={google} alt="" />
                                </span>
                                <span className="btn-inner--text">Google</span>
                            </a>
                        </div>
                    </div>
                    <div className="card-body px-lg-5 py-lg-5">
                        <div className="text-center text-muted mb-4">
                            <small>或者使用账号登录</small>
                        </div>

                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group mb-3">
                                <div className="input-group input-group-alternative">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i
                                            className="ni ni-email-83"></i></span>
                                    </div>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="username"
                                        value={this.state.name}
                                        onChange={(e) => this.handleInputChange('name', e)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group input-group-alternative">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i
                                            className="ni ni-lock-circle-open"></i></span>
                                    </div>
                                    <input
                                        className="form-control"
                                        type="Password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={(e) => this.handleInputChange('password', e)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="custom-control custom-control-alternative custom-checkbox">
                                <input className="custom-control-input" id=" customCheckLogin"
                                    type="checkbox" />
                                <label className="custom-control-label" htmlFor=" customCheckLogin">
                                    <span>记住密码</span>
                                </label>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary my-4">登 录</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6">
                        <Link to="forgotpassword" className="text-light">
                            <small>忘记密码?</small>
                        </Link>
                    </div>
                    <div className="col-6 text-right">
                        <Link to="register" className="text-light">
                            <small>去注册</small>
                        </Link>
                    </div>
                </div>
            </div>
        )
        return (
            <Wrapper>
                { loginForm }
            </Wrapper>
        )
    }
}


// 如果只有render方法，则可以写成无状态组件


// 数据
// const mapStateToProps = (state) =>{
//     return {
//         token: state.user.token
//     }
// }

// 业务逻辑
// function mapDispatchToProps(dispatch) {
//     return {
//         actions: dispatch(getUserInfo)
//     }
// }


// export default connect(mapStateToProps, { loginAction, getUserInfo })(Login)

export default Login