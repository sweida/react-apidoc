import React, { Fragment } from 'react'
import Header from 'pages/header'
import { Link } from 'react-router-dom'
import Footer from 'pages/footer'

const projectList = [
    {
        name: "生成身份证",
        icon: "ni-badge",
        href: "createdidcard"
    }, {
        name: "校验身份证",
        icon: "ni-key-25",
        href: "checkidcard"
    }, {
        name: "生成营业执照",
        icon: "ni-collection",
        href: "license"
    }, {
        name: "生成银行卡号",
        icon: "ni-credit-card",
        href: "bankcard"
    }, {
        name: "生成四要素",
        icon: "ni-badge",
        href: "generator"
    }
]

class Routine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
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
                        { 
                            projectList.map((item, index) => {
                                return (
                                    <div className="card-lift--hover shadow border-0 card projeclist mb-4 text-center pt-4 pb-2 cursor" key={index}>
                                        <Link to={item.href}>
                                            <span className="h2"><i className={`ni ${item.icon}`}></i></span>
                                            <p className="text-default pt-2">{item.name}</p>
                                        </Link>
                                    </div> 
                                )
                            })
                        }
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}




export default Routine

