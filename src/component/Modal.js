// mask.js
import React, { Fragment } from 'react';
import './modal.css'
import ReactDOM from 'react-dom';


export default {
    dom: null, //被append的元素

    show({ title, content, onOk, onCancel }) {
        this.close();

        this.dom = document.createElement('div');

        // JSX代码
        const JSXdom = (
            <Fragment>
                <div className="mask"></div>
                <div className="modal fade show" aria-labelledby="exampleModalLabel">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header border-bottom-0">
                                <h5 className="modal-title" >{title}</h5>
                                <button type="button" className="close" onClick={() => this.onCancel(onCancel)}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <i className="ni ni-bell-55 ni-2x mr-2"></i>
                                <span >{content}</span>
                            </div>
                            <div className="modal-footer border-top-0">
                                <button type="button" className="btn btn-secondary mr-3" onClick={() => this.onCancel(onCancel)}>取 消</button>
                                <button type="button" className="btn btn-primary" onClick={() => this.onOk(onOk)}>确 定</button>
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
        this.dom && this.dom.remove();
    }
}

