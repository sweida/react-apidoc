import React, { Fragment } from 'react';
import './modal.css'
import ReactDOM from 'react-dom';


export default {
    dom: null, //被append的元素
    fadeout: false,

    show({ title, content, onOk, onCancel }) {
        // this.close();
        this.fadeout = false

        this.dom = document.createElement('div');

        // JSX代码
        const JSXdom = (
            <Fragment>
                <div className={`mask `}></div>
                <div className={`modal fade show ${this.fadeout ? 'slideOut' : ''}`}>
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
                                <button type="button" className="btn btn-success" onClick={() => this.onCancel(onCancel)}>确 定</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );

        ReactDOM.render(JSXdom, this.dom);
        document.body.appendChild(this.dom);
    },

    onCancel(onCancel) {
        (onCancel instanceof Function) && onCancel();
        this.close();
    },

    onOk(onOk) {
        (onOk instanceof Function) && onOk();
        this.close();
    },
    close() {
        this.fadeout = true
        setTimeout(() => {
            this.dom && this.dom.remove();
        }, 2000);
    }
}

