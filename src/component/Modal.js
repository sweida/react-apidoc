import React from 'react'
import './modal.css'

class Modal extends React.Component {
    render() {
        return (
            <>
                <div className={`mask ${!this.props.fadeOut ? 'fadeOut' : ''}`}></div>
                <div className={`modal fade show ${!this.props.fadeOut ? 'slideOut' : ''}`} style={{ display: 'block' }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header border-bottom-0">
                                <h5 className="modal-title" >新增项目</h5>
                                <button type="button" className="close" >
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {this.props.children}
                            </div>
                            <div className="modal-footer justify-content-center border-top-0">
                                {/* 调用父组件方法 */}
                                <button type="button" className="btn btn-success" onClick={this.props.closeModal}>确 定</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default Modal;