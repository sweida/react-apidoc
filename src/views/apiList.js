import React from 'react'
import { Link } from 'react-router-dom'
import history from "router/history";
import Header from './header'
import "./list.css"

import Loading from 'component/Loading'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css';
import "./list.css"
import "style/highlight.css"

import ApiCard from 'pages/apiCard'
import { apiList } from '../server/api'
import Footer from './footer'

class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			apidocList: [],
			project: '',
			loading: true
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
		this.getApiList()
		
	}
	getApiList(id) {
		let params = {
			id: this.props.match.params.id
		};
		apiList(params).then(res => {
			this.setState({
				apidocList: res.data.data,
				project: res.data.project,
				loading: false
			});
		});
	}

	newApi(project) {
		history.push(`/projects/${project.id}/addapi`, {project: project})
	}

    render() {
		const apidocList = this.state.apidocList
		const apiCard = apidocList.map((item) => {
			switch (item.requestType) {
				case 'post':
					return <ApiCard key={item.id} data={item} colorType={"success"} marked={marked} getApiList={() => this.getApiList()}/>
				case 'get':
					return <ApiCard key={item.id} data={item} colorType={"info"} marked={marked} getApiList={() => this.getApiList()}/>
				case 'delete':
					return <ApiCard key={item.id} data={item} colorType={"danger"} marked={marked} getApiList={() => this.getApiList()}/>
				case 'put':
					return <ApiCard key={item.id} data={item} colorType={"warning"} marked={marked} getApiList={() => this.getApiList()}/>
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
									<li className="breadcrumb-item active" aria-current="page">{this.state.project.title}</li>
								</ol>
							</nav>
						</div>
						<div className="col-lg-6 col-5 text-right">
							<button className="btn btn-primary" onClick={() => this.newApi(this.state.project)}>
								<span className="btn-inner--icon mr-2">
									<i className="ni ni-atom"></i>
								</span>
								新增接口
							</button>
						</div>
					</div>
					{ this.state.loading && <Loading /> }
					{ apiCard }
				</div>
				<Footer />
			</>
        )
    }
}



export default List

// state.filter(item => item.id !== action.gameid)