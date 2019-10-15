import React from 'react'
import { Link, Redirect } from 'react-router-dom'


function Footer () {
    return (
        <footer className="footer py-4 mt-5">
            <div className="container">
                <div className="row align-items-center justify-content-md-between">
                    <div className="col-md-12">
                        <div className="copyright text-center">
                            &copy; 2019
                            <span className="text-primary ml-2">Creative with <i className="ni ni-favourite-28 text-danger"></i> by <a href="http://golang365.com" target="_blank">九歌</a></span>.
                            <h6>
                                base on <a className="text-primary" href="https://github.com/sweida/apidoc" target="_blank">Laravel</a> + 
                                <a className="text-primary" href="https://github.com/sweida/react-apidoc" target="_blank">react</a>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}




export default Footer