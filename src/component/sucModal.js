import React, { Fragment }from 'react'
import './modal.css'

class Modal extends React.Component {
    render() {
        return (
            <Fragment>
                <div className={`mask ${!this.props.fadeOut ? 'fadeOut' : ''}`}></div>
                <div className={`modal fade show ${!this.props.fadeOut ? 'slideOut' : ''}`} style={{display: 'block'}}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="swal2-icon swal2-success swal2-animate-success-icon">
                                    <div className="swal2-success-circular-line-left" ></div>
                                    <span className="swal2-success-line-tip"></span>
                                    <span className="swal2-success-line-long"></span>
                                    <div className="swal2-success-ring"></div>
                                    <div className="swal2-success-fix" ></div>
                                    <div className="swal2-success-circular-line-right" ></div>
                                </div>
                                <div className="text-center">
                                    <span >添加成功！</span>
                                </div>
                            </div>
                            <div className="modal-footer justify-content-center border-top-0">
                                {/* 调用父组件方法 */}
                                <button type="button" className="btn btn-success" onClick={this.props.closeModal}>确 定</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default Modal;