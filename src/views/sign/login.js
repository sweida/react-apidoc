import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from './Wrapper'
import Alert from 'component/Alert'
import github from 'assets/img/icons/common/github.svg'
import google from 'assets/img/icons/common/google.svg'
import history from "router/history";
import { connect } from 'react-redux'
import { loginAction, getUserInfo, setToken } from "actions/index";
import store from 'store/index'


@connect(
    null,
    { loginAction, getUserInfo, setToken }
)
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: "",
            githubDisabled: false,
        };
    }
    componentDidMount() {
        let token = this.props.location.search.split("=");
        if (token[0] == "?token") {
            this.props.setToken("Bearer " + token[1]);
            
            this.props.getUserInfo().then(() => {
                history.push("/projects");
                Alert.show({
                    message: "登录成功，欢迎回来！！"
                });
            });
        }
    }
    handleInputChange = (name, e) => {
        this.setState({
            [name]: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        let params = {
            name: this.state.name,
            password: this.state.password,
            type: "name"
        };

        this.state.name.indexOf('@') == -1 ? params.type = 'name' : params.type = 'email'

        this.props.loginAction(params).then(res => {
            if (res.status == "success") {
                Alert.show({
                    message: "登录成功，欢迎回来！！"
                });
                this.props.getUserInfo().then(() => {
                    history.push("/projects");
                });
            } else {
                Alert.show({
                    type: "error",
                    message: res.message
                });
            }
        });
    };
    // github授权登录
    handleGithub = e => {
        this.setState({
            githubDisabled: true
        });
        window.location.href = "http://localhost:8080/api/v1/github";
    };

    render() {
        const loginForm = (
            <div className="col-lg-5">
                <div className="card bg-secondary shadow border-0">
                    <div className="card-header bg-white pb-5">
                        <div className="text-muted text-center mb-3">
                            <small>使用下面方式登录</small>
                        </div>
                        <div className="btn-wrapper text-center">
                            <button
                                className="btn btn-icon btn-neutral"
                                type="button"
                                onClick={this.handleGithub}
                                disabled={this.state.githubDisabled}
                            >
                                <span className="btn-inner--icon">
                                    <img src={github} alt="" />
                                </span>
                                {this.state.githubDisabled && (
                                    <span className="snack"></span>
                                )}
                                <span className="btn-inner--text">Github</span>
                            </button>
                            <Link to="#" className="btn btn-neutral btn-icon">
                                <span className="btn-inner--icon">
                                    <img src={google} alt="" />
                                </span>
                                <span className="btn-inner--text">Google</span>
                            </Link>
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
                                        <span className="input-group-text">
                                            <i className="ni ni-circle-08"></i>
                                        </span>
                                    </div>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="用户名或邮箱"
                                        value={this.state.name}
                                        onChange={e => this.handleInputChange("name", e) }
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group input-group-alternative">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="ni ni-lock-circle-open"></i>
                                        </span>
                                    </div>
                                    <input
                                        className="form-control"
                                        type="Password"
                                        placeholder="密码"
                                        value={this.state.password}
                                        onChange={e => this.handleInputChange( "password", e ) }
                                        required
                                    />
                                </div>
                            </div>
                            <div className="custom-control custom-control-alternative custom-checkbox">
                                <input
                                    className="custom-control-input"
                                    id=" customCheckLogin"
                                    type="checkbox"
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor=" customCheckLogin"
                                >
                                    <span>记住账号</span>
                                </label>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="btn btn-primary my-4"
                                >
                                    登 录
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6">
                        <small>
                            <Link to="forgotpassword" className="text-light font-weight-700"> 忘记密码? </Link>
                        </small>
                    </div>
                    <div className="col-6 text-right">
                        <small>
                            <Link to="register" className="text-light font-weight-700">去注册</Link>
                        </small>
                    </div>
                </div>
            </div>
        );
        return <Wrapper>{loginForm}</Wrapper>;
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