import React from 'react'
import { Link, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'





class Footer extends React.Component {
    render() {
        return (
            <footer className="footer py-4 mt-5">
                <div className="container">
                    <div className="row align-items-center justify-content-md-between">
                        <div className="col-md-12">
                            <div className="copyright text-center">
                                &copy; 2019
                                <span className="text-primary ml-2">Creative with <i className="ni ni-favourite-28 text-danger"></i> by 甜橙保理技术部</span>.
                                <h6>
                                    base on <span className="text-primary">Laravel</span> + <span className="text-primary">react</span>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}



export default Footer