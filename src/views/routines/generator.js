import React from 'react';
import Header from 'pages/header'
import Footer from 'pages/footer'
import Alert from 'component/Alert'

var IDValidator = require('id-validator');
var GB2260 = require('id-validator/src/GB2260');

var Validator = new IDValidator(GB2260);


class CheckIdcard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            IdCards: ''
        }
    }

    handleInputChange = (name, e) => {
        this.setState({
            [name]: e.target.value
        });
    }


    CheckIdCard = () => {
        if (this.state.IdCards == '') {
            Alert.show({
                type: 'error',
                message: '请输入有效的身份证！'
            })
            return false
        }

        let IdCardArr = this.state.IdCards.split('\n')

        let result = ''
        IdCardArr.forEach(item => {
            let valid = Validator.isValid(item)
            result = result + item + "  " + valid + '\n'
        });

        this.setState({
            IdCards: result
        })
    }

    Clear = () => {
        this.setState({
            IdCards: ''
        })
    }

    render() {
        return (
            <>
                <Header />
                    <div className="container mt-5">
                        <div className="row mb-3">
                            <div className="col-5 ">
                                <button type="button" className="btn btn-primary mr-4" onClick={this.CheckIdCard}>
                                    <span className="btn-inner--icon mr-2">
                                        <i className="ni ni-key-25"></i>
                                    </span>
                                    <span className="btn-inner--text">校验身份证</span>
                                </button>

                                <button type="button" className="btn btn-warning " onClick={this.Clear}>
                                    <span className="btn-inner--icon mr-2">
                                        <i className="ni ni-basket"></i>
                                    </span>
                                    <span className="btn-inner--text">清空</span>
                                </button>
                            </div>
                        </div>

                        <textarea
                            className="form-control"
                            placeholder="请将需要校验的身份证复制进来，每个身份证号单独一行"
                            value={this.state.IdCards}
                            onChange={(e) => this.handleInputChange('IdCards', e)}
                            rows="15"
                        />
                    </div>
                <Footer />
            </>
        )

    }
}

export default CheckIdcard