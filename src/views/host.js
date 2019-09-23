import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'
import Footer from './footer.js'
import Mask from 'component/Mask'
import Alert from 'component/Alert'
import withDialog from 'component/withDialog'
import Select from "react-select";
import "./list.css"
import { addLink, linkList, deleteLink, editLink } from '../server/api'

const options = [
    { label: "全部环境", value: "all" },
    { label: "通用", value: "通用" },
    { label: "综测", value: "综测" },
    { label: "46", value: "46" },
    { label: "生产", value: "生产" }
]

class Host extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			linkList: [],
			newList: [],
			selectedOption: options[0],
			color: {
				'通用': 'success',
				'46': 'info',
				'综测': 'primary',
				'生产': 'danger',
			}
		};
	}
	componentDidMount() {
		this.getLinkList()
	}

	// 获取列表
	getLinkList () {
		linkList().then(res => {
			this.setState({
                linkList: res.data.data,
                newList: res.data.data
            });
		})
	}

	filterByName = (arr, type) => {
		return arr.filter(item => item.type == type)
	}

	handleSelectChange = selectedOption => {
		if (selectedOption.value == 'all') {
			this.setState({
                selectedOption,
                newList: this.state.linkList
            });
			return 
		}

		let newList = this.filterByName(this.state.linkList, selectedOption.value)
		
        this.setState({
            selectedOption,
            newList: newList
        });
    }


	handleOk = () => {
		setTimeout(() => {
			this.getLinkList()
		}, 200)
	};
	handleEdit = (data) => {
		WrappedDialog.show({
			onOk: this.handleOk,
			id: data.id,
			url: data.url,
			projectTitle: data.title,
			username: data.username,
			password: data.password,
			type: data.type
		});
	}
	showDialog = () => {
		WrappedDialog.show({
			onOk: this.handleOk
		});
	};

	handleDelete(id) {
		let params = {
			id: id
		}
		Mask.show({
			title: '提 示',
			content: '是否删除该链接?',
			onCancel: () => {
			},
			onOk: () => {
				deleteLink(params).then(res => {
					if (res.status == 'success') {
						Alert.show({
							message: res.message
						})
						this.getLinkList()
					} else {
						Alert.show({
							type: 'error',
							message: res.message
						})
					}
				})
				console.log('Ok');
			}
		})
	}
	

    render() {
		const color = {
			'通用': 'success',
			'46': 'info',
			'综测': 'primary',
			'生产': 'danger',
		}
		return (
			<>
				<Header />
				<div className="container mt-4">
					<div className="row flex align-items-center justify-content-between py-3">
						<div className="col-lg-3 col-7">
							<Select
                                value={this.state.selectedOption}
                                className="cardSelect"
                                onChange={this.handleSelectChange}
                                options={options}
                            />
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
									{ 
										this.state.newList.map((item) => {
											return (
												<tr key={item.id}>
													<th scope="row">
														<div className="media align-items-center">
															<a href={item.url} target="_blank" className="media-body text-gray700">
																<span className="name mb-0 text-sm">{item.title}</span>
															</a>
														</div>
													</th>
													<td className="budget">
														<span className={`badge badge-${color[item.type]}`}>{item.type}</span>
													</td>
													<td>
														<span className="badge mr-4">
															<span className="status">{item.url}</span>
														</span>
													</td>
													<td>
														<span className="badge mr-4">
															<span className="status">{item.username || '无'}</span>
														</span>
													</td>
													<td>
														<span className="badge mr-4">
															<span className="status">{item.password || '无'}</span>
														</span>
													</td>
													<td>
														<button type="button" className="btn btn-sm btn-danger" onClick={() => this.handleDelete(item.id)}>
															<span className="btn-inner--text">删除</span>
														</button>
														<button type="button" className="btn btn-sm btn-primary" onClick={() => this.handleEdit(item)}>
															<span className="btn-inner--text">编辑</span>
														</button>
													</td>
												</tr>
											)
										})
									 }
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<Footer />
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
			isEdit: false,
			title: props.projectTitle,
			url: props.url,
			type: props.type || '通用',
			username: props.username || '',
			password: props.password || '',
			requestTypeList: [
				{
					name: '通用',
					color: 'success',
					active: true
				}, {
					name: '46',
					color: 'info',
					active: false
				}, {
					name: '综测',
					color: 'primary',
					active: false
				}, {
					name: '生产',
					color: 'danger',
					active: false
				}
			],
		};
	}

	componentDidMount() {
		// 显示请求方式
		if (this.props.type) {
			let arr = ['通用', '46', '综测', '生产']
			let index = arr.indexOf(this.props.type)
			let requestTypeList = this.state.requestTypeList;
			requestTypeList[0].active = false
			requestTypeList[index].active = true
			this.setState({
				isEdit: !!this.props.type,
				...requestTypeList,
			})
		}

	}
	handleType = (name) => {
		this.setState({
			type: name
		});
	}

	onChange = (name, e) => {
		this.setState({
			[name]: e.target.value
		});
	}

	// 新增
	handleOk = (e) => {
		e.preventDefault();
		let params = {
			...this.state
		}
		this.props.onOk(
			addLink(params).then(res => {
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

	// 编辑
	handleEdit = (e) => {
		e.preventDefault();
		let params = {
			...this.state,
			id: this.props.id
		}
		this.props.onOk(
			editLink(params).then(res => {
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
				<form onSubmit={!this.state.isEdit ? this.handleOk : this.handleEdit}>
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
													onClick={() => this.handleType(item.name)}
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
								value={this.state.url}
								onChange={(e) => this.onChange('url', e)}
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
								value={this.state.username}
								onChange={(e) => this.onChange('username', e)}
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
								value={this.state.password}
								onChange={(e) => this.onChange('password', e)}
							/>
						</div>
					</div>
					<div className="modal-footer border-top-0 px-0">
						<button type="button" className="btn btn-secondary mr-3" onClick={this.props.onClose}>取 消</button>
						{ !this.state.isEdit ? 
							<button type="submit" className="btn btn-primary">确 定</button>
							: <button type="submit" className="btn btn-info">修 改</button>
						}
					</div>
				</form>
			</div>
		);
	}
}

const WrappedDialog = withDialog(SetText);

export default Host

