import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

class ForgotPassword extends Component {
    render() {
        return (
            ForgotPasswordControl
        )
    }
}



const ForgotPasswordControl = (
  <main>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
            <div class="col-lg-5">
                <div class="card bg-secondary shadow border-0">
                <div class="card-header bg-white pb-1">
                    <div class="text-muted text-center mb-2">
                    <small>通过邮件重置密码</small>
                    </div>
                    <div class="card-body px-lg-4 py-lg-4">
                    <form role="form">
                        <div class="form-group mb-3">
                        <div class="input-group input-group-alternative">
                            <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                            </div>
                            <input class="form-control" placeholder="请输入注册时的邮箱地址" type="email" />
                        </div>
                        </div>
                        <div class="text-center">
                        <button type="button" class="btn btn-primary mt-3">发送邮件验证码</button>
                        </div>
                    </form>
                    </div>
                </div>
                <div class="card-body px-lg-5 py-lg-5">
                    <form role="form">
                    <div class="form-group mb-3">
                        <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                        </div>
                        <input class="form-control" placeholder="验证码" type="number" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                        </div>
                        <input class="form-control" placeholder="新密码" type="password" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group input-group-alternative">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                        </div>
                        <input class="form-control" placeholder="确认新密码" type="password" />
                        </div>
                    </div>

                    <div class="text-center">
                        <button type="button" class="btn btn-primary my-4">确 认</button>
                    </div>
                    </form>
                </div>
                </div>
                <div class="row mt-3">
                <div class="col-6">
                </div>
                <div class="col-6 text-right">
                    <Link to="login" className="text-light">
                        <small>去登录</small>
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
  </main>
)

export default ForgotPassword