import React from 'react';
import Header from 'pages/header'
import Footer from 'pages/footer'

import Mock, { Random } from "mockjs";
import Luhn from "utils/luhn";

/**
 * 生成随机银行卡
 * 19位 农行
 *
 * @export
 * @param {string} [bankCode='622848']  默认农行
 * @returns 银行卡号
 */
const rendomBankCard = (bankCode = '622848') => {
    // 随机12位数
    let middleNumber = Mock.mock({
        'regexp': /[0-9]{12}/
    }).regexp;
    let withoutLastNumber = `${bankCode}${middleNumber}`; // 无最后一位数字
    return Luhn.generate(withoutLastNumber);
}

// 生成随机数
const randNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

class CheckIdcard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowBankName: false,
            num: 1,
            cardBin: "622848",
            cardBinList: [
                { name: "农业银行", value: "622848" },
                { name: "招商银行", value: "622580" },
                { name: "民生银行", value: "622622" },
                { name: "建设银行", value: "622728" },
                { name: "中国银行", value: "622763" },
                { name: "兴业银行", value: "622909" },
                { name: "工商银行", value: "623062" },
                { name: "浦发银行", value: "622228" },
                { name: "中信银行", value: "621771" },
                { name: "光大银行", value: "622663" },
                { name: "民生银行", value: "622617" },
                { name: "交通银行", value: "622258" },
                { name: "平安银行", value: "622156" },
                { name: "邮政银行", value: "620062" },
                { name: "华夏银行", value: "621222" }
            ],
            IdCardArr: ""
        };
    }

    handleInputChange = (name, e) => {
        this.setState({
            [name]: e.target.value
        });
    }

    handleCheckChange = () => {
        this.setState({
            isShowBankName: !this.state.isShowBankName
        });
    }

    CreateIdCard = (num) => {
        if (num > 100 || num < 1) {
            num = 1
        }
        let arr = ''
        for (let i = 1; i <= num; i++) {
            let bank = randNum(0, this.state.cardBinList.length-1)
            let card = rendomBankCard(this.state.cardBinList[bank].value);
            let bankName = ''
            if (this.state.isShowBankName) {
                bankName = ', ' + this.state.cardBinList[bank].name;
            }
            arr = arr + card + bankName + "\n";
        }
        this.setState({
            IdCardArr: arr
        });
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
                                    <i className="ni ni-credit-card"></i>
                                </span>
                                <span className="btn-inner--text">生成随机银行卡号</span>
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
                                    value={this.state.isShowBankName}
                                    onChange={this.handleCheckChange}
                                />
                                <label className="custom-control-label" htmlFor="customCheck">是否显示银行名称</label>
                            </div>
                        </div>
                    </div>

                    <textarea
                        className="form-control bg-white"
                        readOnly
                        placeholder="生成银行卡号"
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