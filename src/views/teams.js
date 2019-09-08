import React from "react";
import { UserList, DeleteOrRestored } from "server/api";
import Header from "./header";
import Footer from "./footer";

class Teams extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userlist: []
		};
	}

	componentDidMount() {
		UserList().then(res => {
			this.setState({ userlist: res.data });
		});
	}

	handleInputChange(index, id) { 
		let list = Object.assign({}, this.state.userlist)
		let isDelete = ''
		if (list[index].deleted_at) {
			list[index].deleted_at = '';
		} else {
			list[index].deleted_at = 1;
			isDelete = 1
		}
		let params = {
			id: id,
			delete: isDelete
		}
		DeleteOrRestored(params)
		this.setState({
			...list
		})
	}

	render() {
		return (
			<>
				<Header />
				<div className="container mt-5">
					<div className="table-responsive">
						<div>
							<table className="table align-items-center">
								<thead className="thead-light">
									<tr>
										<th scope="col" className="sort"> 姓名 </th>
										<th scope="col" className="sort"> 邮箱 </th>
										<th scope="col" className="sort"> 权限 </th>
										<th scope="col" className="sort"> 是否冻结账户 </th>
										<th scope="col" className="sort"> 最后登录 </th>
									</tr>
								</thead>
								<tbody className="list">
									{this.state.userlist.map((item, index) => {
										return (
											<tr key={index}>
												<th scope="row">
													<div className="media align-items-center">
														<span className="name mb-0 text-sm">
															{item.name}
														</span>
													</div>
												</th>
												<td className="budget">
													<span className="status">{item.email}</span>
												</td>
												<td>
													<span className="badge">
														<span className="status">
															{item.admin ? "管理员" : "普通"}
														</span>
													</span>
												</td>
												<td>
													<span className="badge user_tate">
														<label className="custom-toggle">
															<input
																type="checkbox"
																checked={item.deleted_at ? true : false}
																onChange={() => this.handleInputChange(index, item.id)}
															/>
															<span className="custom-toggle-slider rounded-circle"></span>
														</label>
													</span>
												</td>
												<td>
													<span className="badge">
														<span className="status">{item.updated_at}</span>
													</span>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<Footer />
			</>
		);
	}
}

export default Teams;
