import React, { Component } from 'react'
import { BrowserRouter, Router, Route, Switch, Redirect } from 'react-router-dom'
import { userInfo } from 'server/api'
import NotFound from 'component/notFound'
import router from 'router/index'
import history from 'router/history'
import { connect } from 'react-redux'
import { getUserInfo } from 'actions/actionCreators'

import 'assets/css/argon-1.0.css'
import 'assets/vendor/nucleo/css/nucleo.css'
import 'assets/vendor/font-awesome/css/font-awesome.min.css'

class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    if (this.props.token) {
      console.log('是否进来', this.props.token);
      
      this.props.getUserInfo()
    }
  }
  componentWillReceiveProps() {

  }
  render() {
    let token = this.props.token
    
    return (
      <BrowserRouter>
        {/* 路由拦截 */}
          <Router history={history}>
            <Switch>
              {
                router.map((item, index) => {
                  return <Route key={index} path={item.path} exact render={props =>
                    (!item.auth ? (<item.component {...props} />) :
                      (token ?
                        <item.component {...props} /> :
                        <Redirect push to={{ pathname: '/login' }} />
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

// const mapStateToProps = (state, ownProps) => {
//   return { token: state.token }
// }
// export default connect(mapStateToProps)(App)


// {
//   router.map((item, index) => {
//     return <Route key={index} path={item.path} exact render={props =>
//       (!item.auth ? (<item.component {...props} />) :
//         (token ?
//           <item.component {...props} /> :
//           <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//         )
//       )} />
//   })
// }


// 数据
const mapStateToProps = (state) => {
  console.log(state, 55444);
  return {
    token: state.user.token
  }
}


export default connect(mapStateToProps, { getUserInfo } )(App)

// export default App;