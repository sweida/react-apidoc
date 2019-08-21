import React from 'react'
import ReactDOM from 'react-dom'

export default class Layer extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        this.el.setAttribute('class', 'layer');
    }
    componentDidMount() {
        document.body.appendChild(this.el);
    }
    componentWillUnmount() {
        document.body.removeChild(this.el);
    }
    render() {
        return ReactDOM.createPortal((
            <div className="content">
                layer
            </div>
        ), this.el);
    }
}