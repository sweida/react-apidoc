import React, { Component } from 'react'
import { BrowserRouter, Router, Route, Switch, Redirect } from 'react-router-dom'
import NotFound from 'component/notFound'
import router from 'router/index'
import history from 'router/history'
import { connect } from 'react-redux'
import { getUserInfo } from 'actions/index'

import 'assets/css/argon-1.0.css'
import 'assets/vendor/nucleo/css/nucleo.css'
import 'assets/vendor/font-awesome/css/font-awesome.min.css'

@connect (
    state => ({ 
		token: state.user.token,
		userInfo: state.user.userInfo 
	}),
    { getUserInfo }
)

class App extends Component {
	componentDidMount() {
		if (this.props.token) {
			this.props.getUserInfo()
		}
	}

	render() {
		let token = this.props.token
		let admin = this.props.userInfo ? this.props.userInfo.admin : ''

		return (
			<BrowserRouter>
				{/* 路由拦截 */}
				<Router history={history}>
					<Switch>
						{
							router.map((item, index) => {
								return <Route key={index} path={item.path} exact render={props =>
									(!item.auth ? <item.component {...props} /> :
										(!token ? <Redirect push to={{ pathname: '/login' }} /> :
											(!item.admin ? <item.component {...props} /> :
												(!admin ? <Redirect push to={{ pathname: '/projects' }} /> :
													<item.component {...props} />
												)
											)
										)
									)} />
							})
						}
						<Route component={NotFound} />
					</Switch>
				</Router>
			</BrowserRouter>
		);
	}
}


export default App;