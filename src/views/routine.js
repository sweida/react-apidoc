import React, { Fragment } from 'react'
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

class Routine extends React.Component {
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
    }

    render() {
        return (
            <>
                <Header />
                <div className="container mt-5">
                    <div className="projects">
                        <div className="card-lift--hover shadow border-0 card projeclist mb-4">
                            <Link to="createdidcard" className="pt-4 pb-3 card-body">
                                <h6 className="text-primary text-uppercase project-title">
                                    <i className="ni ni-book-bookmark mr-2"></i>
                                    生成身份证
                                </h6>
                            </Link>
                        </div>
                        <div className="card-lift--hover shadow border-0 card projeclist mb-4">
                            <Link to="checkidcard" className="pt-4 pb-3 card-body">
                                <h6 className="text-primary text-uppercase project-title">
                                    <i className="ni ni-book-bookmark mr-2"></i>
                                    校验身份证
                                </h6>
                            </Link>
                        </div>
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
                    生成身份证
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






export default Routine

