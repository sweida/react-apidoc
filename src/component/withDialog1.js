/*
* 增加一个 show 方法
* 不需要标签，通过 show 展示弹窗
* 不需要 visible state
*
* 每个组件都要重复写 show 方法
*/
import React from "react";
import ReactDOM from "react-dom";

class DialogCustom extends React.Component {
    static show = params => {
        let container = document.createElement("div");
        document.body.appendChild(container);

        function closeHandle() {
            ReactDOM.unmountComponentAtNode(container);
            document.body.removeChild(container);
            container = null;
        }

        ReactDOM.render(
            <DialogCustom {...params} onClose={closeHandle} />,
            container
        );
    };

    constructor(props) {
        super(props);
        this.state = { text: "" };
    }

    onChange = e => {
        this.setState({ text: e.target.value });
    };

    handleOk = () => {
        this.props.onOk(this.state.text);
        this.props.onClose();
    };

    render() {
        const { children, onClose, ...others } = this.props;

        return (
            <>
                <div className="mask"></div>
                <div className="modal fade show" style={{ display: 'block' }}>
                    <div className="modal-dialog modal-dialog-centered" role="document" style={{ minWidth: '600px' }}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" >{WrappedComponent.title}</h5>
                                <button type="button" className="close" >
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <WrappedComponent {...others} onClose={onClose} />
                            </div>
                            <div className="modal-footer border-top-0 mr-4">
                                <button type="button" className="btn btn-secondary mr-3" onClose={onClose}>取 消</button>
                                <button type="button" className="btn btn-primary" onClose={onClose}>确 定</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            <Modal
                {...others}
                visible={true}
                title="设置文案"
                onCancel={onClose}
                onOk={this.handleOk}
            >
                <Input value={this.state.text} onChange={this.onChange} />
            </Modal>
        );
    }
}