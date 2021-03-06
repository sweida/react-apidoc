import React, { Fragment }from 'react'
import Header from './header'
import "./list.css"
import { addProject, projectList } from '../server/api'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css';
import Hidden from 'component/Hidden'

import Modal from 'component/Modal';
import withDialog from 'component/withDialog';
// import ReactDOM from 'react-dom';
import Alert from 'component/Alert'
import { Link } from 'react-router-dom'
import Footer from './footer'

class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			projectList: [],
		};
	}
	componentDidMount() {
		projectList().then(res => {
			this.setState({ projectList: res.data })
		})
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
	}

	handleOk = () => {
		// 没写延时会同时触发，导致数据没更新
		setTimeout(() => {
			projectList().then(res => {
				this.setState({ projectList: res.data })
			})
		}, 300)
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
				<div className="container mt-5">
					<div className="projects">
						<CardControl projectList={this.state.projectList} handleEdit={this.handleEdit}/>
						<div className="card-lift--hover shadow border-0 card projeclist mb-4 text-center pt-3 pb-2 cursor" onClick={this.showDialog}>
							<span className="h1">+</span>
							<p>新增项目</p>
						</div>
					</div>
				</div>
				<Footer />
			</>
        )
    }
}

function CardControl(props) {
	const projectList = props.projectList
	const list = projectList.map((item) => 
		<div className="card-lift--hover shadow border-0 card projeclist mb-4" key={item.id}>
			<Link to={`projects/${item.id}`} className="pt-4 pb-3 card-body">
				<h6 className="text-primary text-uppercase project-title">
					<i className="ni ni-book-bookmark mr-2"></i>
					{item.title} 
					<span className="ml-2 badge badge-pill badge-info">{item.count}</span>
				</h6>
				<p className="description text-body mt-3">{item.descp}</p>
			</Link>
			{/* <i className="ni ni-ruler-pencil editBtn" onClick={() => props.handleEdit(item)}></i> */}
		</div>
	);
	return (
		list
	)
}




// 弹窗
class SetText extends React.Component { 
	static header = "新增项目";

	static defaultProps = {
		onClose: () => { }
	};

	constructor(props) {
		super(props);
		this.state = { 
			title: props.projectTitle,
			descp: props.descp,
		};
		console.log(props, 4545);
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
							className="col-md-3 col-form-label form-control-label">项目名称</label>
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
							className="col-md-3 col-form-label form-control-label">项目描述</label>
						<div className="col-md-9">
							<input
								className="form-control"
								type="text"
								value={this.state.descp}
								onChange={(e) => this.onChange('descp', e)}
								required
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



export default Projects

