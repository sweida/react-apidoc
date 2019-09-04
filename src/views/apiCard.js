import React from 'react'
import Mask from 'component/Mask';
import Alert from 'component/Alert'
import { deleteApi, restored } from '../server/api'
import history from 'router/history'
import { connect } from 'react-redux'

@connect(
	state => ({ userInfo: state.user.userInfo }),
	null
)

class ApiCard extends React.Component {
	handleDelete(id) {
		let params = {
			id: id
		}
		Mask.show({
			title: '提 示',
			content: '是否删除该api?',
			onCancel: () => {
			},
			onOk: () => {
				deleteApi(params).then(res => {
					if (res.status == 'success') {
						Alert.show({
							message: res.message
						})
					} else {
						Alert.show({
							type: 'error',
							message: res.message
						})
					}
				})
				console.log('Ok');
			}
		})
	}
	handleRestored(id) {
		let params = {
			id: id
		}
		Mask.show({
			title: '提 示',
			content: '是否恢复该api?',
			onCancel: () => {
			},
			onOk: () => {
				restored(params).then(res => {
					if (res.status == 'success') {
						Alert.show({
							message: res.message
						})
					} else {
						Alert.show({
							type: 'error',
							message: res.message
						})
					}
				})
				console.log('Ok');
			}
		})
	}
	handleEdit() {
		let project_id = this.props.data.project_id
		let id = this.props.data.id
		history.push(`/projects/${project_id}/edit/${id}`, {apiData: this.props.data});
	}
	render() {
		const data = this.props.data
		const restored = this.props.restored
		const restoreBtn = (
			<button type="button" className="btn btn-sm btn-info" onClick={() => this.handleRestored(data.id)}>
				<span className="btn-inner--icon">
					<i className="ni ni-planet mr-2"></i>
				</span>
				<span className="btn-inner--text">恢 复 </span>
			</button>
		)
		const commonBtn = (
			<>
				{data.length!=0 && data.user_id == this.props.userInfo.id &&
					<button type="button" className="btn btn-sm btn-danger " onClick={() => this.handleDelete(data.id)}>
						<span className="btn-inner--icon mr-2">
							<i className="ni ni-bag-17"></i>
						</span>
						<span className="btn-inner--text">删 除 </span>
					</button>
				}
				<button type="button" className="btn btn-sm btn-primary" onClick={() => this.handleEdit(data)}>
					<span className="btn-inner--icon">
						<i className="ni ni-planet mr-2"></i>
					</span>
					<span className="btn-inner--text">编 辑 </span>
				</button>
			</>
		)

		return(
			<>
				<div className={`${data.requestType} border border-${this.props.colorType} my-3`}>
					<div className="px-3 py-2 cursor" data-toggle="collapse" data-target={`#${data.id}`} aria-expanded="true" aria-controls="collapseOne">
						<button className={`btn btn-sm btn-${this.props.colorType}`} type="button">{data.requestType}</button>
						<span className="font-weight-bold ml-2 mr-3">/{data.url}</span>
						<small>{data.title}</small>
						<div className="close">
							<i className={`fa fa-code text-${this.props.colorType}`}></i>
						</div>
					</div>
					{/* Detail */}
					<div id={data.id} className={`border-${this.props.colorType} border-top collapse`}>
						<div className="card-body">
							<div className="row mb-3 border-bottom">
								<div className="col-2 mt-3">
									<span>api地址</span>
								</div>
								<div className="col-10">
									<div className="alert code-bg">
										<strong>/{data.url}</strong>
									</div>
								</div>
							</div>
							<div className="row mb-3 border-bottom">
								<div className="col-2">
									<span>params</span>
									<p>(请求参数)</p>
								</div>
								<div className="col-10">
									<div className="alert code-bg">
										<blockquote className="blockquote mb-0" dangerouslySetInnerHTML={{ __html: this.props.marked(data.requestParams) }}>
										</blockquote>
									</div>
								</div>
							</div>
							<div className="row ">
								<div className="col-2">
									<span>Responses</span>
									<p>(返回值)</p>
								</div>
								<div className="col-10">
									<div className="alert code-bg">
										<blockquote className="blockquote mb-0" dangerouslySetInnerHTML={{ __html: this.props.marked(data.results) }}>
										</blockquote>
									</div>
								</div>
							</div>
							<div className="text-right">
								{restored ? restoreBtn : commonBtn}
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}

}


export default ApiCard

