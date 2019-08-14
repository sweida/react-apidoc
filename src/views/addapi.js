import React from 'react'
import Header from './header'
import "./list.css"

class Addapi extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            apiData: {
                url: '',
                requestType: 'post',
                classify: '',
                title: '',
                requestParams: '',
                results: '',
            }
        };
    }
    handleInputChange = (name, e) => {
        this.setState({
            [name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(4343433);
        
    }
    render() {
        return (
            <div>
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
                                            <a href="#" className="btn btn-sm btn-primary">后退</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group row">
                                            <label for="example-text-input"
                                                className="col-md-2 col-form-label form-control-label">api地址</label>
                                            <div className="col-md-10">
                                                <input 
                                                    className="form-control" 
                                                    type="text" 
                                                    value={this.state.url} 
                                                    onChange={this.handleInputChange.bind(this, 'url')}
                                                    required 
                                                />
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
                                            <label for="example-email-input"
                                                className="col-md-2 col-form-label form-control-label">描叙</label>
                                            <div className="col-md-10">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    value={this.state.title}
                                                    onChange={this.handleInputChange.bind(this, 'title')}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-url-input"
                                                className="col-md-2 col-form-label form-control-label">所属项目</label>
                                            <div className="col-md-10">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    value={this.state.classify}
                                                    onChange={this.handleInputChange.bind(this, 'classify')}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-tel-input"
                                                className="col-md-2 col-form-label form-control-label">请求参数</label>
                                            <div className="col-md-10">
                                                <textarea
                                                    className="form-control"
                                                    value={this.state.requestParams}
                                                    onChange={this.handleInputChange.bind(this, 'requestParams')}
                                                    rows="6"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-password-input" className="col-md-2 col-form-label form-control-label">返回值</label>
                                            <div className="col-md-10">
                                                <textarea
                                                    className="form-control"
                                                    value={this.state.results}
                                                    onChange={this.handleInputChange.bind(this, 'results')}
                                                    rows="6"
                                                />
                                            </div>
                                        </div>

                                        <div className="text-center m-auto col-md-3">
                                            <button className="btn btn-success btn-block mb-3" type="sumbit">提 交</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



function Top() {
    return (
        <div class="header bg-primary pb-6">
            <div class="container container-fluid">
                <div class="header-body">
                    <div class="row align-items-center py-4">
                        <div class="col-lg-6 col-7">
                            <h6 class="h4 text-white d-inline-block mb-0">天翼保理api</h6>
                            <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                                <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                                    <li class="breadcrumb-item"><a
                                        href="https://argon-dashboard-pro-laravel.creative-tim.com/dashboard"><i
                                            class="fas fa-home"></i></a></li>
                                    <li class="breadcrumb-item"><a
                                        href="https://argon-dashboard-pro-laravel.creative-tim.com/item">Item
										Management</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Add Item</li>
                                </ol>
                            </nav>
                        </div>
                        <div class="col-lg-6 col-5 text-right">
                            <a href="#" class="btn btn-sm btn-neutral">New</a>
                            <a href="#" class="btn btn-sm btn-neutral">Filters</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Addapi