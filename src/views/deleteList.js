import React, { Fragment }from 'react'
import { Link } from 'react-router-dom'
import Header from './header'


import Mask from 'component/Mask';
import Alert from 'component/Alert'


import ApiCard from 'pages/apiCard'

import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css';
import "./list.css"
import "style/highlight.css"
// import ReactDOM from 'react-dom';

import { deleteList } from '../server/api'

class DeleteController extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			apidocList: [],
		};
	}
	componentDidMount() {
		deleteList().then(res => {
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
		const apidocList = this.state.apidocList
		const list = apidocList.map((item) => {
			switch (item.requestType) {
				case 'post':
					return <ApiCard key={item.id} data={item} colorType={"success"} marked={marked} restored={true}/>
				case 'get':
					return <ApiCard key={item.id} data={item} colorType={"info"} marked={marked} restored={true}/>
				case 'delete':
					return <ApiCard key={item.id} data={item} colorType={"danger"} marked={marked} restored={true}/>
				case 'put':
					return <ApiCard key={item.id} data={item} colorType={"warning"} marked={marked} restored={true}/>
			}
		});
		return (
			<>
				<Header />
				<div className="container mt-5">
					{list}
				</div>
			</>
        )
    }
}



export default DeleteController

