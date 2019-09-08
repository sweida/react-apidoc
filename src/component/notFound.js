import React from 'react'
import { Link } from 'react-router-dom'
import img from 'assets/img/404.png'

class NotFound extends React.Component {
    render() {
        return (
            <div className="notFound">
                <img src={img} />
                <Link to="/projects" className="btn btn-primary mt-3">
                    <span className="btn-inner--text">返回首页</span>
                </Link>
            </div>
        )
    }
}

export default NotFound;