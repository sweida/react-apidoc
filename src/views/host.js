import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'
import "./list.css"

import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css';
import "./list.css"
import "style/highlight.css"
import { addProject, projectList } from '../server/api'
import withDialog from 'component/withDialog';
import Alert from 'component/Alert'
import ApiCard from 'pages/apiCard'
// import ReactDOM from 'react-dom';

import { apiList, deleteApi } from '../server/api'

const user = JSON.parse(localStorage.getItem('user'))

class Host extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			apidocList: [],
		};
	}
	componentDidMount() {
		marked.setOptions({
			highlight: function (code) {
				return hljs.highlightAuto(code).value;
			},
			pedantic: false,
			gfm: true,
			tables: true,
			breaks: false,
			sanitize: false,
			smartLists: true,
			smartypants: false,
			xhtml: false
		});
		let params = {
			id: this.props.match.params.id
		}
		apiList(params).then(res => {
			this.setState({ apidocList: res.data.data })
		})
	}

	handleOk = () => {
		console.log(32323232);

		projectList().then(res => {
			this.setState({ projectList: res.data })
		})
	};
	handleEdit = (data) => {
		WrappedDialog.show({
			onOk: this.handleOk,
			descp: data.descp,
			projectTitle: data.title,
		});
	}
	showDialog = () => {
		WrappedDialog.show({
			onOk: this.handleOk
		});
	};
	

    render() {
		return (
			<>
				<Header />
				<div className="container mt-4">
					<div className="row align-items-center py-3">
						<div className="col-lg-6 col-7">
							
						</div>
						<div className="col-lg-6 col-5 text-right">
							<Link to="#" className="btn btn-primary " onClick={this.showDialog}>
								<span className="btn-inner--icon mr-2">
									<i className="ni ni-atom"></i>
								</span>
								新增链接
							</Link>
						</div>
					</div>
					<div className="table-responsive">
						<div>
							<table className="table align-items-center">
								<thead className="thead-light">
									<tr>
										<th scope="col" className="sort" data-sort="name">名称</th>
										<th scope="col" className="sort" data-sort="budget">环境</th>
										<th scope="col" className="sort" data-sort="status">地址</th>
										<th scope="col" className="sort" data-sort="status">用户名</th>
										<th scope="col" className="sort" data-sort="status">密码</th>
										<th scope="col" className="sort" data-sort="completion">操作</th>
									</tr>
								</thead>
								<tbody className="list">
									<tr>
										<th scope="row">
											<div className="media align-items-center">
												<div className="media-body">
													<span className="name mb-0 text-sm">Argon Design System</span>
												</div>
											</div>
										</th>
										<td className="budget">
											<span class="badge badge-primary">46</span>
											<span class="badge badge-info">综测</span>
											<span class="badge badge-danger">生产</span>
											<span class="badge badge-success">通用</span>
										</td>
										<td>
											<span className="badge badge-dot mr-4">
												<i className="bg-warning"></i>
												<span className="status">pending</span>
											</span>
										</td>
										<td>
											<span className="badge badge-dot mr-4">
												<i className="bg-warning"></i>
												<span className="status">pending</span>
											</span>
										</td>
										<td>
											<span className="badge badge-dot mr-4">
												<i className="bg-warning"></i>
												<span className="status">pending</span>
											</span>
										</td>
										<td>
											<button type="button" className="btn btn-sm btn-danger">
												<span className="btn-inner--text">删除</span>
											</button>
											<button type="button" className="btn btn-sm btn-primary">
												<span className="btn-inner--text">编辑</span>
											</button>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<div className="media align-items-center">

												<div className="media-body">													<span className="name mb-0 text-sm">Argon Design System</span>
												</div>
											</div>
										</th>
										<td className="budget">
											$2500 USD
										</td>
										<td>
											<span className="badge badge-dot mr-4">
												<i className="bg-warning"></i>
												<span className="status">pending</span>
											</span>
										</td>
										<td>
											<span className="badge badge-dot mr-4">
												<i className="bg-warning"></i>
												<span className="status">pending</span>
											</span>
										</td>
										<td>
											<span className="badge badge-dot mr-4">
												<i className="bg-warning"></i>
												<span className="status">pending</span>
											</span>
										</td>
										<td>
											<button type="button" className="btn btn-sm btn-danger">
												<span className="btn-inner--text">删除</span>
											</button>
											<button type="button" className="btn btn-sm btn-primary">
												<span className="btn-inner--text">编辑</span>
											</button>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<div className="media align-items-center">

												<div className="media-body">
													<span className="name mb-0 text-sm">Argon Design System</span>
												</div>											</div>
										</th>
										<td className="budget">
											$2500 USD
										</td>
										<td>
											<span className="badge badge-dot mr-4">
												<i className="bg-warning"></i>
												<span className="status">pending</span>
											</span>
										</td>
										<td>
											<span className="badge badge-dot mr-4">
												<i className="bg-warning"></i>
												<span className="status">pending</span>
											</span>
										</td>
										<td>
											<span className="badge badge-dot mr-4">
												<i className="bg-warning"></i>
												<span className="status">pending</span>
											</span>
										</td>
										<td>
											<button type="button" className="btn btn-sm btn-danger">
												<span className="btn-inner--text">删除</span>
											</button>
											<button type="button" className="btn btn-sm btn-primary">
												<span className="btn-inner--text">编辑</span>
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</>
        )
    }
}



// 弹窗
class SetText extends React.Component {
	static header = "新增链接";

	static defaultProps = {
		onClose: () => { }
	};

	constructor(props) {
		super(props);
		this.state = {
			title: props.projectTitle,
			descp: props.descp,
			requestTypeList: [
				{
					name: '46',
					color: 'success',
					active: true
				}, {
					name: '综测',
					color: 'info',
					active: false
				}, {
					name: '生产',
					color: 'danger',
					active: false
				}, {
					name: '通用',
					color: 'warning',
					active: false
				}
			],
		};
	}

	onChange = (name, e) => {
		this.setState({
			[name]: e.target.value
		});
	}

	handleOk = (e) => {
		e.preventDefault();
		let params = {
			...this.state
		}
		this.props.onOk(
			addProject(params).then(res => {
				if (res.status == 'success') {
					this.props.onClose();
					Alert.show({
						type: 'success',
						message: res.message
					})
				} else {
					Alert.show({
						type: 'error',
						message: res.message
					})
				}
			})
		);
	};

	render() {
		return (
			<div className="p-4">
				<form onSubmit={this.handleOk}>
					<div className="form-group row">
						<label htmlFor="example-text-input"
							className="col-md-3 col-form-label form-control-label">名称</label>
						<div className="col-md-9">
							<input
								className="form-control"
								type="text"
								value={this.state.title}
								onChange={(e) => this.onChange('title', e)}
								required
							/>
						</div>
					</div>
					<div className="form-group row">
						<label htmlFor="example-text-input"
							className="col-md-3 col-form-label form-control-label">环境</label>
						<div className="col-md-9">
							<ul className="nav nav-pills nav-fill flex-column flex-md-row" id="tabs-text"
								role="tablist">
								{
									this.state.requestTypeList.map((item, index) => {
										return (
											<li className="nav-item cursor" key={index}>
												<div className={`nav-link btn-outline-${item.color} ${item.active == true ? 'active' : ''}`}
													data-toggle="tab"
													role="tab"
													aria-selected={item.active}>{item.name}</div>
											</li>
										)
									})
								}
							</ul>
						</div>
					</div>
					<div className="form-group row">
						<label htmlFor="example-text-input"
							className="col-md-3 col-form-label form-control-label">地址</label>
						<div className="col-md-9">
							<input
								className="form-control"
								type="text"
								value={this.state.title}
								onChange={(e) => this.onChange('title', e)}
								required
							/>
						</div>
					</div>
					<div className="form-group row">
						<label htmlFor="example-text-input"
							className="col-md-3 col-form-label form-control-label">用户名</label>
						<div className="col-md-9">
							<input
								className="form-control"
								type="text"
								value={this.state.descp}
								onChange={(e) => this.onChange('descp', e)}
							/>
						</div>
					</div>
					<div className="form-group row">
						<label htmlFor="example-text-input"
							className="col-md-3 col-form-label form-control-label">密码</label>
						<div className="col-md-9">
							<input
								className="form-control"
								type="text"
								value={this.state.descp}
								onChange={(e) => this.onChange('descp', e)}
							/>
						</div>
					</div>
					<div className="modal-footer border-top-0 px-0">
						<button type="button" className="btn btn-secondary mr-3" onClick={this.props.onClose}>取 消</button>
						<button type="submit" className="btn btn-primary">确 定</button>
					</div>
				</form>
			</div>
		);
	}
}

const WrappedDialog = withDialog(SetText);

export default Host

