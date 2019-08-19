import React, { Fragment }from 'react'
import Header from './header'
import "./list.css"
import { addProject, projectList } from '../server/api'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css';
import Hidden from 'component/Hidden'

import Mask from 'component/Modal';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'


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
        return (
			<Fragment>
				<Header />
				<div className="container mt-5">
					<div className="projects">
						<CardControl projectList={this.state.projectList} />
						<AddCardControl />
					</div>
				</div>
			</Fragment>
        )
    }
}

function CardControl(props) {
	const projectList = props.projectList
	const list = projectList.map((item) => 
		<div className="card-lift--hover shadow border-0 card projeclist mb-4" key={item.id}>
			<Link to={`projects/${item.id}`} className="pt-4 pb-3 card-body">
				<h6 className="text-primary text-uppercase">{item.title}</h6>
				<p className="description text-body mt-3">{item.descp}</p>

				{/* <Link to="list" className="mt-2 btn btn-primary">点击查看</Link> */}
			</Link>
		</div>
	);
	return (
		list
	)
}


function AddCardControl(props) {

	return (
		<div className="card-lift--hover shadow border-0 card projeclist mb-4 text-center pt-4 pb-3 cursor">
			<span className="h1">+</span>
			<p>新增项目</p>
		</div>
	)
}


export default Projects

