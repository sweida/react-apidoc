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

const withDialog = (WrappedComponent) => {
    function EnhancedComponent(props) {
        const { header, onClose, ...others } = props;

        
        return (
            <>
                <div className="mask"></div>
                <div className="modal fade show" style={{ display: 'block' }}>
                    <div className="modal-dialog modal-dialog-centered" role="document" style={{ minWidth: '600px'}}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" >{WrappedComponent.header}</h5>
                                <button type="button" className="close" onClose={WrappedComponent.onClose}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <WrappedComponent {...others} onClose={onClose} />
                            </div>
                            {/* <div className="modal-footer border-top-0 mr-4">
                                <button type="button" className="btn btn-secondary mr-3" onClose={onClose}>取 消</button>
                                <button type="button" className="btn btn-primary" onClose={onClose}>确 定</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </>
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


export default withDialog
