import React from 'react';
import Header from 'pages/header'
import Footer from 'pages/footer'

var IDValidator = require('id-validator');
var GB2260 = require('id-validator/src/GB2260');

var Validator = new IDValidator(GB2260);


class CheckIdcard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 1,
            isShowAdd: false,
            IdCardArr: ''
        }
    }

    handleInputChange = (name, e) => {
        this.setState({
            [name]: e.target.value
        });
    }

    handleCheckChange = () => {
        this.setState({
            isShowAdd: !this.state.isShowAdd
        });
    }


    CreateIdCard = (num) => {
        if (num > 100 || num < 1) {
            num = 1
        }
        let arr = ''
        for (let i = 1; i <= num; i++) {
            let Id = Validator.makeID()
            let addr = ',' + Validator.getInfo(Id).addr
            if (!this.state.isShowAdd) {
                addr = ''
            }
            arr = arr + Id + addr + '\n'
            this.setState({
                IdCardArr: arr
            })
        }
    }

    render() {
        return (
            <>
                <Header />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-3">
                            <button type="button" className="btn btn-primary " onClick={() => this.CreateIdCard(this.state.num)}>
                                <span className="btn-inner--icon mr-2">
                                    <i className="ni ni-collection"></i>
                                </span>
                                <span className="btn-inner--text">生成营业执照</span>
                            </button>
                        </div>
                        <div className="col-3 ">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" >生成数量</span>
                                    </div>
                                    <input
                                        type="number"
                                        min="1" max="100"
                                        placeholder="单次最多100个"
                                        className="form-control pl-2 border-left"
                                        value={this.state.num}
                                        onChange={(e) => this.handleInputChange('num', e)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-3 ">
                            <div className="custom-control custom-checkbox pt-2" >
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customCheck"
                                    value={this.state.isShowAdd}
                                    onChange={this.handleCheckChange}
                                />
                                <label className="custom-control-label" htmlFor="customCheck">是否显示地区</label>
                            </div>
                        </div>
                    </div>

                    <textarea
                        className="form-control"
                        placeholder="生成身份证"
                        value={this.state.IdCardArr}
                        onChange={(e) => this.handleInputChange('IdCardArr', e)}
                        rows="15"
                    />
                </div>
                <Footer />
            </>
        )

    }
}

export default CheckIdcard