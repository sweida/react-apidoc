import React, { Fragment } from 'react'
import Header from './header'
import { Link } from 'react-router-dom'
import "./list.css"
import { addapi } from '../server/api'
import Modal from "component/sucModal"

class Addapi extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            // apiData: {
                url: '',
                requestType: 'post',
                classify: '',
                title: '',
                requestParams: '',
                results: '',
                modal: false,
                fade: true
            // }
        };
    }
    handleInputChange = (name, e) => {
        this.setState({
            [name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let params = {
            // ...this.state,
            url: this.state.url,
            requestType: this.state.requestType,
            classify: this.state.classify,
            title: this.state.title,
            requestParams: '```js\n' + this.state.requestParams + '\n```',
            results: '```js\n' + this.state.results + '\n```',
        }
        addapi(params).then(res => {
            if (res.status == 'success') {
                this.setState({
                    modal: true,
                    fade: true
                })
            }
        })
    }
    showModal = () => {
        this.setState({
            modal: true,
            fade: true
        })
    }
    closeModal = () => {
        this.setState({
            fade: false
        })
        setTimeout(() => {
            this.setState({
                modal: false
            })
        }, 400);
    }
    render() {
        return (
            <React.Fragment>
                {this.state.modal ? <Modal closeModal={this.closeModal} fadeOut={this.state.fade}/> : null}
                <Header />
                <Top />
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
                                            <Link onClick={() => window.history.go(-1)} className="btn btn-sm btn-primary">后退</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group row">
                                            <label htmlFor="example-text-input"
                                                className="col-md-2 col-form-label form-control-label">api地址</label>
                                            <div className="col-md-10">
                                                <input 
                                                    className="form-control" 
                                                    type="text" 
                                                    value={this.state.url} 
                                                    onChange={(e) => this.handleInputChange('url', e)}
                                                    required 
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="example-search-input"
                                                className="col-md-2 col-form-label form-control-label">请求方式</label>
                                            <div className="col-md-5">
                                                <ul className="nav nav-pills nav-fill flex-column flex-md-row" id="tabs-text"
                                                    role="tablist">
                                                    <li className="nav-item">
                                                        <a className="nav-link btn-outline-success active" data-toggle="tab"
                                                            href="#" role="tab" aria-selected="true">POST</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link btn-outline-info" data-toggle="tab" href="#"
                                                            role="tab" aria-selected="false">GET</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link btn-danger" data-toggle="tab" href="#"
                                                            role="tab" aria-selected="false">DELETE</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link btn-warning" data-toggle="tab" href="#"
                                                            role="tab" aria-selected="false">PUT</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="example-email-input"
                                                className="col-md-2 col-form-label form-control-label">描叙</label>
                                            <div className="col-md-10">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    value={this.state.title}
                                                    onChange={(e) => this.handleInputChange('title', e)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="example-url-input"
                                                className="col-md-2 col-form-label form-control-label">所属项目</label>
                                            <div className="col-md-10">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    value={this.state.classify}
                                                    onChange={(e) => this.handleInputChange('classify', e)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="example-tel-input"
                                                className="col-md-2 col-form-label form-control-label">请求参数</label>
                                            <div className="col-md-10">
                                                <textarea
                                                    className="form-control"
                                                    placeholder={this.state.demoRequestParams}
                                                    value={this.state.requestParams}
                                                    onChange={(e) => this.handleInputChange('requestParams', e)}
                                                    rows="8"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="example-password-input" className="col-md-2 col-form-label form-control-label">返回值</label>
                                            <div className="col-md-10">
                                                <textarea
                                                    className="form-control"
                                                    value={this.state.results}
                                                    onChange={(e) => this.handleInputChange('results', e)}
                                                    rows="12"
                                                />
                                            </div>
                                        </div>

                                        <div className="text-center m-auto col-md-3">
                                            <button className="btn btn-success btn-block mb-3" type="sumbit" >提 交</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


function Top() {
    return (
        <div className="header bg-primary pb-6">
            <div className="container container-fluid">
                <div className="header-body">
                    <div className="row align-items-center py-4">
                        <div className="col-lg-6 col-7">
                            <h6 className="h4 text-white d-inline-block mb-0">天翼保理api</h6>
                            <nav aria-label="breadcrumb" className="d-none d-md-inline-block ml-md-4">
                                <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                    <li className="breadcrumb-item"><a
                                        href="https://argon-dashboard-pro-laravel.creative-tim.com/dashboard"><i
                                            className="fas fa-home"></i></a></li>
                                    <li className="breadcrumb-item"><a
                                        href="https://argon-dashboard-pro-laravel.creative-tim.com/item">Item
										Management</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Add Item</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-lg-6 col-5 text-right">
                            <a href="#" className="btn btn-sm btn-neutral">New</a>
                            <a href="#" className="btn btn-sm btn-neutral">Filters</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Addapi


// { 
//     url: number,    // 路由
//     requestType: string,    // 请求方式
//     classify: string,
//     title: '',
//     requestParams: '',
//     results: '',
//     modal: false,
//     fade: true
// } 