import React, { Fragment }from 'react'
import Header from './header'
import "./list.css"
import { personApi } from '../server/api'

// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom'
import ApiCard from 'pages/apiCard'

import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css';
import "./list.css"
import "style/highlight.css"



class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = { apidocList: [] };
	}
	componentDidMount() {
		personApi().then(res => {
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

    render() {
        return (
			<React.Fragment>
				<Header />
				<ListControl apidocList={this.state.apidocList}/>
			</React.Fragment>
        )
    }
}

function ListControl(props) {
	const apidocList = props.apidocList
	const list = apidocList.map((item) => {
		switch (item.requestType){
			case 'post':
				return <ApiCard key={item.id} data={item} colorType={"success"} marked={marked} />
			case 'get':
				return <ApiCard key={item.id} data={item} colorType={"info"} marked={marked} />
			case 'delete':
				return <ApiCard key={item.id} data={item} colorType={"danger"} marked={marked} />
			case 'put':
				return <ApiCard key={item.id} data={item} colorType={"warning"} marked={marked} />
		}
	});
	return (
		<div className="container mt-5">
			{list}
		</div>
	)
}



export default List

