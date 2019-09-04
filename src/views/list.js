import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'
import "./list.css"

import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css';
import "./list.css"
import "style/highlight.css"

import ApiCard from 'pages/apiCard'
import { apiList } from '../server/api'


class List extends React.Component {
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

    render() {
		const apidocList = this.state.apidocList
		const apiCard = apidocList.map((item) => {
			switch (item.requestType) {
				case 'post':
					return <ApiCard key={item.id} data={item} colorType={"success"} marked={marked}/>
				case 'get':
					return <ApiCard key={item.id} data={item} colorType={"info"} marked={marked}/>
				case 'delete':
					return <ApiCard key={item.id} data={item} colorType={"danger"} marked={marked}/>
				case 'put':
					return <ApiCard key={item.id} data={item} colorType={"warning"} marked={marked}/>
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
									<li className="breadcrumb-item active" aria-current="page">企业白条H5</li>
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
					{apiCard}
				</div>
			</>
        )
    }
}



export default List

// state.filter(item => item.id !== action.gameid)