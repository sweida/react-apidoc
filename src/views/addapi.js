import React, { Component } from 'react'
import Header from './header'

class Addapi extends Component {
    render() {
        return (
            <App />
        )
    }
}


function App() {
    return (
        <div>
            <Header />
            <AddapiControl />
        </div>
    );
}



function AddapiControl() {
    return (
        <div className="container container-fluid mt--6 mb-5">
            <div className="row">
                <div className="col-xl-12 order-xl-1">
                    <div className="card">
                        <div className="card-header">
                            <div className="row align-items-center">
                                <div className="col-8">
                                    <h5 className="mb-0">添加api文档</h5>
                                </div>
                                <div className="col-4 text-right">
                                    <a href="#"  className="btn btn-sm btn-primary">后退</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group row">
                                    <label for="example-text-input"
                                        className="col-md-2 col-form-label form-control-label">api地址</label>
                                    <div className="col-md-10">
                                        <input className="form-control" type="text" value="" id="example-text-input" required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="example-search-input"
                                        className="col-md-2 col-form-label form-control-label">请求方式</label>
                                    <div className="col-md-5">
                                        <ul className="nav nav-pills nav-fill flex-column flex-md-row" id="tabs-text"
                                            role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link btn-outline-success active" data-toggle="tab"
                                                    href="javascript:;" role="tab" aria-selected="true">POST</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link btn-outline-info" data-toggle="tab" href="javascript:;"
                                                    role="tab" aria-selected="false">GET</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link btn-danger" data-toggle="tab" href="javascript:;"
                                                    role="tab" aria-selected="false">DELETE</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link btn-warning" data-toggle="tab" href="javascript:;"
                                                    role="tab" aria-selected="false">PUT</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="example-email-input"
                                        className="col-md-2 col-form-label form-control-label">描叙</label>
                                    <div className="col-md-10">
                                        <input className="form-control" type="email" value="" id="example-email-input" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="example-url-input"
                                        className="col-md-2 col-form-label form-control-label">所属项目</label>
                                    <div className="col-md-10">
                                        <input className="form-control" type="url" value="" id="example-url-input" required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="example-tel-input"
                                        className="col-md-2 col-form-label form-control-label">请求参数</label>
                                    <div className="col-md-10">
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" ></textarea>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="example-password-input" className="col-md-2 col-form-label form-control-label">返回值</label>
                                    <div className="col-md-10">
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" ></textarea>
                                    </div>
                                </div>

                                <div className="text-center m-auto col-md-3">
                                    <button className="btn btn-success btn-block mb-3" type="button">提 交</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addapi