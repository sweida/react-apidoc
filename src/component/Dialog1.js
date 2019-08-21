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

// 使用
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "" };
    }

    showDialog = () => {
        DialogCustom.show({
            onOk: v => {
                this.setState({ text: v });
            }
        });
    };

    render() {
        return (
            <div>
                <Button onClick={this.showDialog}>设置文案</Button>
                <div>{this.state.text}</div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
