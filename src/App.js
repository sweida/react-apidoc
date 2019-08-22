import React, { Component } from 'react'
import { BrowserRouter, Router, Route, Switch, Redirect } from 'react-router-dom'
import { userInfo } from 'server/api'
import NotFound from 'component/notFound'
import router from 'router/index'
import history from 'router/history'


import 'assets/css/argon-1.0.css'
import 'assets/vendor/nucleo/css/nucleo.css'
import 'assets/vendor/font-awesome/css/font-awesome.min.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: localStorage.getItem('token')
    }
  }
  componentDidMount() {
    if (localStorage.getItem('token')) {
      console.log('是否进来');
      
      userInfo().then(res => {
        if (res.status == 'success') {
          localStorage.setItem('user', JSON.stringify(res.data))
        }
      })
    }
  }
  render() {
    return (
      <BrowserRouter>
        {/* 路由拦截 */}
          <Router history={history}>
            <Switch>
              {
                router.map((item, index) => {
                  return <Route key={index} path={item.path} exact render={props =>
                    (!item.auth ? (<item.component {...props} />) :
                      (this.state.token ?
                        <item.component {...props} /> :
                        <Redirect push to={{ pathname: '/login', state: { from: props.location } }} />
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


export default App;