import React from 'react'
import Header from './header'
import "./list.css"
import { apidocs } from '../server/api'
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom'



class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = { apidocList: [] };
	}
	componentDidMount() {
		apidocs().then(res => {
			this.setState({ apidocList: res.data.data })
		})
	}

    render() {
        return (
			<div>
				<Header />
				<ListControl apidocList={this.state.apidocList}/>
			</div>
        )
    }
}

function ListControl(props) {
	const apidocList = props.apidocList
	const list = apidocList.map((item) => {
		switch (item.requestType){
			case 'post':
				return <CommonControl key={item.id} data={item} colorType={"success"}/>
			case 'get':
				return <CommonControl key={item.id} data={item} colorType={"info"} />
			case 'delete':
				return <CommonControl key={item.id} data={item} colorType={"danger"} />
			case 'put':
				return <CommonControl key={item.id} data={item} colorType={"warning"} />
		}
	});
	return (
		<div className="container">
			{list}
		</div>
	)
}

function CommonControl(props) {
	const data = props.data
	return (
		<div>
			{/* <button type="button" className="btn btn-info ">
				
				<span className="btn-inner--text">所属项目 -- {data.classify}</span>
			</button> */}
		
			<div className={`${data.requestType} border border-${props.colorType} my-3`}>
				<div className="px-3 py-2" data-toggle="collapse" data-target={`#${data.id}`} aria-expanded="true" aria-controls="collapseOne">
					<button className={`btn btn-sm btn-${props.colorType}`} type="button">{data.requestType}</button>
					<span className="font-weight-bold ml-2 mr-3">/{data.url}</span>
					<small>{data.title}</small>
					<div  className="close">
						<i className={`fa fa-code text-${props.colorType}`}></i>
					</div>
					{/* <span class="badge badge-success float-right mr-3">所属项目：{data.classify}</span> */}
				</div>
				<Detail data={data} border={`${props.colorType}`} />
			</div>
		</div>
	)
}


function Detail(props) {
	const data = props.data
	return (
		<div id={data.id} className={`border-${props.border} border-top collapse`}>
			<div className="card-body">
				<div className="row mb-3 border-bottom">
					<div className="col-2 mt-3">
						<span>api地址</span>
					</div>
					<div className="col-10">
						<div className={`alert alert-default`}>
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
						<div className="alert alert-default">
							<blockquote className="blockquote text-white p-2 mb-0">
								<footer className="blockquote-footer text-danger">{data.requestParams}</footer>
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
						<div className="alert alert-default">
							<blockquote className="blockquote text-white p-2 mb-0">
								{data.results}
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
								<footer className="blockquote-footer text-danger">Someone famous in <cite title="Source Title">Source Title</cite></footer>
							</blockquote>
						</div>
					</div>
				</div>
				<div className="text-right">
					<button type="button" className="btn btn-sm btn-primary ">
						<span className="btn-inner--icon">
							<i className="ni ni-planet"></i>
						</span>
						<span className="btn-inner--text">编 辑 </span>
					</button>
				</div>
			</div>
		</div>
	)
}


export default List

