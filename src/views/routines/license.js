import React from 'react';
import Header from 'pages/header'
import Footer from 'pages/footer'
import { getBusiness } from 'server/api'
 import Alert from "component/Alert";

var IDValidator = require('id-validator');
var GB2260 = require('id-validator/src/GB2260');

var Validator = new IDValidator(GB2260);


class CheckIdcard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 1,
            isShowName: false,
			licenses: '',
			type: 2,
			businessType: [
				{
					name: '企业普通营业执照',
					color: 'success',
					active: false
				}, {
					name: '企业三证合一',
					color: 'info',
					active: true
				}, {
					name: '个体普通营业执照',
					color: 'primary',
					active: false
				}, {
					name: '个体三证合一',
					color: 'danger',
					active: false
				}
			]
        }
    }

    handleInputChange = (name, e) => {
        this.setState({
            [name]: e.target.value
        });
    }

    handleCheckChange = () => {
        this.setState({
            isShowName: !this.state.isShowName
        });
    }

	handleType = (id) => {
		this.setState({
			type: id
		});
	}

    getLicense = () => {
        let params = {
			count: this.state.num || 1,
			type: this.state.type
        }
        getBusiness(params).then(res => {
			if (res.status == 'success') {
				let list = ''
				res.data.forEach(item => {
					let comName = ', ' + item.name
					if (!this.state.isShowName) {
						comName = ''
					}
					list = list + item.license + comName + "\n";
				})
				this.setState({
					licenses: list
				})
			} else {
				Alert.show({
					type: "error",
					message: res.data.message
				});
			}
        })
    }

    render() {
        return (
          <>
            <Header />
            <div className="container mt-5">
				<div className="row">
					<div className="col-3">
						<button
						type="button"
						className="btn btn-primary "
						onClick={this.getLicense}
						>
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
							<span className="input-group-text">生成数量</span>
							</div>
							<input
							type="number"
							min="1"
							max="20"
							placeholder="单次最多20个"
							className="form-control pl-2 border-left"
							value={this.state.num}
							onChange={e => this.handleInputChange("num", e)}
							/>
						</div>
						</div>
					</div>
					<div className="col-3 ">
						<div className="custom-control custom-checkbox pt-2">
						<input
							type="checkbox"
							className="custom-control-input"
							id="customCheck"
							value={this.state.isShowName}
							onChange={this.handleCheckChange}
						/>
						<label
							className="custom-control-label"
							htmlFor="customCheck"
						>
							是否显示公司名称
						</label>
						</div>
					</div>
				</div>

				<div className="col mb-3">
					<ul
						className="nav nav-pills nav-fill flex-column flex-md-row"
						id="tabs-text"
						role="tablist"
					>
						<span className="col-form-label mr-2">营业执照类型：</span>
						{
							this.state.businessType.map((item, index) => {
								return (
									<li className="nav-item cursor" key={index}>
										<div
											className={`nav-link btn-outline-${item.color} ${ item.active == true ? "active" : "" }`}
											data-toggle="tab"
											role="tab"
											onClick={() => this.handleType(index+1)}
											aria-selected={item.active}
										>
											{item.name}
										</div>
									</li>
								);
							})
						}
					</ul>
				</div>

            	<textarea
					className="form-control bg-white"
					readOnly
					placeholder="一次最多生成20个营业执照，目前只有企业三证合一的"
					value={this.state.licenses}
					onChange={e => this.handleInputChange("licenses", e)}
					rows="15"
            	/>
            </div>
            <Footer />
          </>
        );

    }
}

export default CheckIdcard