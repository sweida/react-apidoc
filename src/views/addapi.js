import React, { Fragment } from 'react'
import Header from './header'
import { Link } from 'react-router-dom'
import "./list.css"
import { addApi, editApi } from 'server/api'
import Modal from "component/sucModal"

class Addapi extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            project: '',
            url: '',
            requestType: 'post',
            classify: '',
            title: '',
            requestParams: '',
            results: '',
            modal: false,
            fade: true,
            isEdit: false,
            requestTypeList: [
                {
                    name: 'POST',
                    color: 'success',
                    active: true
                }, {
                    name: 'GET',
                    color: 'info',
                    active: false
                }, {
                    name: 'DELETE',
                    color: 'danger',
                    active: false
                }, {
                    name: 'PUT',
                    color: 'warning',
                    active: false
                }
            ],
        };
    }
    componentDidMount() {
        console.log(this.props, 54545);
        if (this.props.match.params.apiid) {
            console.log('编辑api');
            let apiData = this.props.location.state.apiData

            // 显示请求方式
            let arr = ['post', 'get', 'delete', 'put']
            let index = arr.indexOf(apiData.requestType)
            let requestTypeList = this.state.requestTypeList;
            requestTypeList[0].active = false
            requestTypeList[index].active = true

            this.setState({
                isEdit: true,
                ...apiData,
                ...requestTypeList,
                project: this.props.location.state.apiData.project
            });
        } else {
            this.setState({
                project: this.props.location.state.project
            })
        }
    }
    handleInputChange = (name, e) => {
        this.setState({
            [name]: e.target.value
        });
    }
    handleCreateDmoe = () => {
        this.setState({
            requestParams: 
`\`\`\`js
{
    loginId: string,    // 登录名, 必传
    initiationID: string,    //     流水日志, 必传
    amount: number,     // 额度
    use_amount: number,      // 可用额度
}
\`\`\``,
            results: 
`\`\`\`js
{
    errorCode: number,
    errorMsg: string,
    result: {
        amount: number,     // 额度
        use_amount: number,      // 可用额度
    },      // 返回结果
    success: true,
}
\`\`\``,
        })
    }
    // 新增
    handleSubmit = (e) => {
        e.preventDefault();
        let params = {
            url: this.state.url,
            requestType: this.state.requestType,
            project_id: this.props.match.params.id,
            title: this.state.title,
            requestParams: this.state.requestParams,
            results: this.state.results,
        }
        addApi(params).then(res => {
            if (res.status == 'success') {
                this.setState({
                    modal: true,
                    fade: true,
                    url: '',
                    requestType: 'post',
                    classify: '',
                    title: '',
                    requestParams: '',
                    results: '',
                })
            }
        })
    }
    handleRequestType = (name) => {
        this.setState({
            requestType: name.toLowerCase()
        });
    }
    // 编辑保存
    handleUpdata = (e) => {
        e.preventDefault();

        let params = {
            id: this.props.match.params.apiid,
            url: this.state.url,
            requestType: this.state.requestType,
            project_id: this.props.match.params.id,
            title: this.state.title,
            requestParams: this.state.requestParams,
            results: this.state.results,
        }
        editApi(params).then(res => {
            if (res.status == 'success') {
                this.setState({
                    modal: true,
                    fade: true,
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
        const Bread = (
            <div className="header bg-primary pb-6">
                <div className="container container-fluid">
                    <div className="header-body">
                        <div className="row align-items-center py-4">
                            <div className="col-lg-6 col-7">
                                <nav className=" d-md-inline-block ">
                                    <ol className="breadcrumb breadcrumb-links breadcrumb-dark shadow bg-white">
                                        <li className="breadcrumb-item">
                                            <span className="btn-inner--icon mr-2">
                                                <i className="ni ni-align-left-2"></i>
                                            </span>
                                            <Link to="/projects">项目列表</Link>
                                        </li>
                                        <Link to={`/projects/${this.state.project.id}`} className="breadcrumb-item" aria-current="page">
                                            {this.state.project.title}
                                        </Link>
                                        <li className="breadcrumb-item active" aria-current="page">{this.state.isEdit ? '编辑api' : '新增api'}</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="col-lg-6 col-5 text-right">
                                <Link to="#" onClick={() => window.history.go(-1)} className="btn btn-neutral">后退</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        return (
            <React.Fragment>
                {this.state.modal && <Modal closeModal={this.closeModal} fadeOut={this.state.fade}/>}
                <Header />
                { Bread }
                <div className="container container-fluid mt--6 mb-5">
                    <div className="row">
                        <div className="col-xl-12 order-xl-1">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row align-items-center">
                                        <div className="col-8">
                                            <h5 className="mb-0">{this.state.isEdit ? '编辑api文档' : '添加api文档'}</h5>
                                        </div>
                                        <div className="col-4 text-right">
                                            <button onClick={this.handleCreateDmoe} className="btn btn-sm btn-primary" type="button">生成模板</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.state.isEdit ? this.handleUpdata : this.handleSubmit}>
                                        <div className="form-group row">
                                            <label htmlFor="example-url-input"
                                                className="col-md-2 col-form-label form-control-label">所属项目</label>
                                            <div className="col-md-10">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    value={this.state.project.title}
                                                    onChange={(e) => this.handleInputChange('classify', e)}
                                                    disabled
                                                    required
                                                />
                                            </div>
                                        </div>
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
                                                    {
                                                        this.state.requestTypeList.map((item, index) => {
                                                            return (
                                                                <li className="nav-item" key={index}>
                                                                    <Link className={`nav-link btn-outline-${item.color} ${item.active == true ? 'active' : ''}`} 
                                                                        data-toggle="tab"
                                                                        to="#" role="tab" 
                                                                        onClick={() => this.handleRequestType(item.name)}
                                                                        aria-selected={item.active}>{item.name}</Link>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="example-email-input"
                                                className="col-md-2 col-form-label form-control-label">描述</label>
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
                                            {this.state.isEdit ? 
                                                <button className="btn btn-info btn-block mb-3" type="sumbit" >保存编辑</button> :
                                                <button className="btn btn-success btn-block mb-3" type="sumbit" >提 交</button>
                                            }
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




export default Addapi
