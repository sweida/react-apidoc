import React, { Fragment } from 'react'
import Header from 'pages/header'
import { Link } from 'react-router-dom'
import Footer from 'pages/footer'

class Routine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectList: [],
        };
    }
    componentDidMount() {

    }

    render() {
        return (
            <>
                <Header />
                <div className="container mt-5">
                    <div className="projects">
                        <div className="card-lift--hover shadow border-0 card projeclist mb-4 text-center pt-4 pb-2 cursor" onClick={this.showDialog}>
                            <Link to="createdidcard">
                                <span className="h2"><i className="ni ni-badge"></i></span>
                                <p className="text-default pt-2">生成身份证</p>
                            </Link>
                        </div>
                        <div className="card-lift--hover shadow border-0 card projeclist mb-4 text-center pt-4 pb-2 cursor" onClick={this.showDialog}>
                            <Link to="checkidcard">
                                <span className="h2"><i className="ni ni-key-25"></i></span>
                                <p className="text-default pt-2">校验身份证</p>
                            </Link>
                        </div>
                        <div className="card-lift--hover shadow border-0 card projeclist mb-4 text-center pt-4 pb-2 cursor" onClick={this.showDialog}>
                            <Link to="license">
                                <span className="h2"><i className="ni ni-collection"></i></span>
                                <p className="text-default pt-2">生成营业执照</p>
                            </Link>
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

