import React, { Fragment } from 'react';
import './modal.css'
import ReactDOM from 'react-dom';

/*
*** 封装4种alert, 使用方法
Alert.show({
    type: 'success',
    message: '这是内容'
})
type: success info danger warning， 默认success可以不传

*/

export default {
    dom: null, //被append的元素

    show({ type, message, onOk, onCancel }) {
        this.dom && this.dom.remove();
        this.close();

        this.dom = document.createElement('div');

        let color = 'success'
        let icon = 'ni-like-2'
        switch (type) {
            case 'info':
                color = 'info'
                icon = 'ni-air-baloon'
                break;
            case 'warning':
                color = 'warning'
                icon = 'ni-air-baloon'
                break;
            case 'error':
                color = 'danger'
                icon = 'ni-fat-remove'
                break;
        }

        // 2秒后自动移除
        const JSXdom = (
            <div className="message alertClose">
                <div className={`alert col-3 m-auto alert-${color} alert-dismissible fade show`} role="alert">
                    <span className="alert-icon mr-2"><i className={`ni ${icon}`}></i></span>
                    <span className="alert-text"><strong></strong> { message }</span>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => this.onCancel(onCancel)}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        );

        ReactDOM.render(JSXdom, this.dom);
        
        document.body.appendChild(this.dom);
    },
    onCancel(onCancel) {
        (onCancel instanceof Function) && onCancel();
        this.dom && this.dom.remove();
    },

    // settimeout销毁问题没解决
    close() {
        setTimeout(() => {
            this.dom && this.dom.remove();
        }, 2000);
    }

}


