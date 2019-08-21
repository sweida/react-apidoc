/*
* 通过高阶组件给普通组件加上弹窗功能
* 
* 不需要标签，通过 show 展示弹窗
* 不需要 visible state
* SetText 只要处理本身的逻辑，注意一下关闭弹窗的时机，此外不用在意弹窗；如果不需要弹窗了，那么不使用高阶组件，直接使用 SetText 即可
* 任何组件通过 withDialog 都可以拥有弹窗功能
*/
import React from "react";
import ReactDOM from "react-dom";

const withDialog = WrappedComponent => {
    function EnhancedComponent(props) {
        const { title, onClose, ...others } = props;

        return (
            <Modal
                visible={true}
                title={title || WrappedComponent.title}
                footer={<div />}
            >
                <WrappedComponent {...others} onClose={onClose} />
            </Modal>
        );
    }

    EnhancedComponent.show = params => {
        let container = document.createElement("div");
        document.body.appendChild(container);

        function closeHandle() {
            ReactDOM.unmountComponentAtNode(container);
            document.body.removeChild(container);
            container = null;
        }

        ReactDOM.render(
            <EnhancedComponent {...params} onClose={closeHandle} />,
            container
        );
    };

    return EnhancedComponent;
};

class SetText extends React.Component {
    // 只要处理本身的逻辑，几乎不用在意弹窗
    static title = "设置文案";

    static defaultProps = {
        onClose: () => { }
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
        return (
            <div>
                <input value={this.state.text} onChange={this.onChange} />
                <div>
                    <button onClick={this.handleOk}>确定</button>
                    <button onClick={this.props.onClose}>取消</button>
                </div>
            </div>
        );
    }
}

const WrappedDialog = withDialog(SetText);

// 使用
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "" };
    }

    handleOk = v => {
        this.setState({ text: v });
    };

    showDialog = () => {
        WrappedDialog.show({
            onOk: this.handleOk
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.showDialog}>设置文案</button>
                <div>{this.state.text}</div>
                <h1>无弹窗使用：</h1>
                <SetText onOk={this.handleOk} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
