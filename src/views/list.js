import React, { Fragment }from 'react'
import { Link } from 'react-router-dom'
import Header from './header'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css';
import Hidden from 'component/Hidden'
import "./list.css"
import "style/highlight.css"

import Mask from 'component/Mask';
// import ReactDOM from 'react-dom';

import { apiList } from '../server/api'

const user = JSON.parse(localStorage.getItem('user'))

class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			apidocList: [],
		};
	}
	componentDidMount() {
		let params = {
			id: this.props.match.params.id
		}
		apiList(params).then(res => {
			this.setState({ apidocList: res.data.data })
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
	showModal() {
		Mask.show({
			title: '提 示',
			content: '是否删除该api?',
			onCancel: () => {
			},
			onOk: () => {
				console.log('Ok');
			}
		})
	}

    render() {
		const apidocList = this.state.apidocList
		const list = apidocList.map((item) => {
			switch (item.requestType) {
				case 'post':
					return <CommonControl key={item.id} data={item} colorType={"success"} />
				case 'get':
					return <CommonControl key={item.id} data={item} colorType={"info"} />
				case 'delete':
					return <CommonControl key={item.id} data={item} colorType={"danger"} />
				case 'put':
					return <CommonControl key={item.id} data={item} colorType={"warning"} />
			}
		});
		return (
			<>
				<Header />
				<div className="container mt-3">
					<div className="row align-items-center py-3">
						<div className="col-lg-6 col-7">
							<nav className=" d-md-inline-block ">
								<ol className="breadcrumb breadcrumb-links breadcrumb-dark shadow bg-white">
									<li className="breadcrumb-item">
										<span className="btn-inner--icon mr-2">
											<i className="ni ni-align-left-2"></i>
										</span>
										<Link to="/projects">项目列表</Link>
									</li>
									<li className="breadcrumb-item active" aria-current="page">api 文档</li>
								</ol>
							</nav>
						</div>
						<div className="col-lg-6 col-5 text-right">
							<Link to={`/projects/${this.props.match.params.id}/addapi`} className="btn btn-primary ">
								<span className="btn-inner--icon mr-2">
									<i className="ni ni-atom"></i>
								</span>
								新增接口
							</Link>
						</div>
					</div>
					{list}
				</div>
			</>
        )
    }
}


function CommonControl(props) {
	const data = props.data
	return (
		<Fragment>
			<div className={`${data.requestType} border border-${props.colorType} my-3`}>
				<div className="px-3 py-2" data-toggle="collapse" data-target={`#${data.id}`} aria-expanded="true" aria-controls="collapseOne">
					<button className={`btn btn-sm btn-${props.colorType}`} type="button">{data.requestType}</button>
					<span className="font-weight-bold ml-2 mr-3">/{data.url}</span>
					<small>{data.title}</small>
					<div  className="close">
						<i className={`fa fa-code text-${props.colorType}`}></i>
					</div>
				</div>
				<Detail data={data} border={`${props.colorType}`} />
			</div>
		</Fragment>
	)
}

class Detail extends React.PureComponent {
	handleDelete() {
		Mask.show({
			title: '提 示',
			content: '是否删除该api?',
			onCancel: () => {
			},
			onOk: () => {
				console.log('Ok');
			}
		})
	}
	handleEdit() {
		console.log(3333);
	}
	render() {
		const data = this.props.data
		return (
			<div id={data.id} className={`border-${this.props.border} border-top collapse`}>
				<div className="card-body">
					<div className="row mb-3 border-bottom">
						<div className="col-2 mt-3">
							<span>api地址</span>
						</div>
						<div className="col-10">
							<div className="alert code-bg">
								<strong>/{data.url}</strong>
							</div>
						</div>
					</div>
					<div className="row mb-3 border-bottom">
						<div className="col-2">
							<span>params</span>
							<p>(请求参数)</p>
						</div>
						<div className="col-10">
							<div className="alert code-bg">
								<blockquote className="blockquote mb-0" dangerouslySetInnerHTML={{ __html: marked(data.requestParams) }}>
								</blockquote>
							</div>
						</div>
					</div>
					<div className="row ">
						<div className="col-2">
							<span>Responses</span>
							<p>(返回值)</p>
						</div>
						<div className="col-10">
							<div className="alert code-bg">
								<blockquote className="blockquote mb-0" dangerouslySetInnerHTML={{ __html: marked(data.results) }}>
								</blockquote>
							</div>
						</div>
					</div>
					<div className="text-right">
						<Hidden visible={data.user_id == user.id}>
							<button type="button" className="btn btn-sm btn-danger " onClick={this.handleDelete}>
								<span className="btn-inner--icon mr-2">
									<i className="ni ni-bag-17"></i>
								</span>
								<span className="btn-inner--text">删 除 </span>
							</button>
						</Hidden>

						<button type="button" className="btn btn-sm btn-primary" onClick={this.handleEdit}>
							<span className="btn-inner--icon">
								<i className="ni ni-planet mr-2"></i>
							</span>
							<span className="btn-inner--text">编 辑 </span>
						</button>
					</div>
				</div>
			</div>
		)
	}
}

// function Detail(props) {
// 	const data = props.data
// 	return (
// 		<div id={data.id} className={`border-${props.border} border-top collapse`}>
// 			<div className="card-body">
// 				<div className="row mb-3 border-bottom">
// 					<div className="col-2 mt-3">
// 						<span>api地址</span>
// 					</div>
// 					<div className="col-10">
// 						<div className="alert code-bg">
// 							<strong>/{data.url}</strong> 
// 						</div>
// 					</div>
// 				</div>
// 				<div className="row mb-3 border-bottom">
// 					<div className="col-2">
// 						<span>params</span>
// 						<p>(请求参数)</p>
// 					</div>
// 					<div className="col-10">
// 						<div className="alert code-bg">
// 							<blockquote className="blockquote mb-0" dangerouslySetInnerHTML= {{ __html: marked(data.requestParams) }}>
// 							</blockquote>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="row ">
// 					<div className="col-2">
// 						<span>Responses</span>
// 						<p>(返回值)</p>
// 					</div>
// 					<div className="col-10">
// 						<div className="alert code-bg">
// 							<blockquote className="blockquote mb-0" dangerouslySetInnerHTML={{ __html: marked(data.results) }}>
// 							</blockquote>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="text-right">
// 					<Hidden visible={data.user_id == user.id}>
// 						<button type="button" className="btn btn-sm btn-danger " >
// 							<span className="btn-inner--icon mr-2">
// 								<i className="ni ni-bag-17"></i>
// 							</span>
// 							<span className="btn-inner--text">删 除 </span>
// 						</button>
// 					</Hidden>
					
// 					<button type="button" className="btn btn-sm btn-primary">
// 						<span className="btn-inner--icon">
// 							<i className="ni ni-planet mr-2"></i>
// 						</span>
// 						<span className="btn-inner--text">编 辑 </span>
// 					</button>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }


function Modal() {
	return (
		<div className="modal fade show" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{display:"block"}}>
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header border-bottom-0">
						<h5 className="modal-title" >提 示</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<i className="ni ni-bell-55 ni-2x mr-2"></i>
						<span>是否确定删除该api?</span>
					</div>
					<div className="modal-footer border-top-0">
						<button type="button" className="btn btn-secondary mr-3" data-dismiss="modal">取 消</button>
						<button type="button" className="btn btn-primary">确 定</button>
					</div>
				</div>
			</div>
		</div>
	)
}


export default List

