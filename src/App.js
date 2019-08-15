import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { userInfo } from 'server/api'
import NotFound from 'component/notFound'
import router from './router/router'

import 'assets/css/argon-1.0.css'
import 'assets/vendor/nucleo/css/nucleo.css'
import 'assets/vendor/font-awesome/css/font-awesome.min.css'

class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    if (localStorage.getItem('token')) {
      userInfo().then(res => {
        if (res.status == 'success') {
          localStorage.setItem('user', JSON.stringify(res.data))
        }
      })
    }
  }
  render() {
    let token = localStorage.getItem('token')
    // let token = this.props.token

    return (
      <BrowserRouter>
        <div>
          {/* 路由拦截 */}
          <Switch>
            {router.map((item, index) => {
              return <Route key={index} path={item.path} exact render={props =>
                (!item.auth ? (<item.component {...props} />) : 
                  (token ? 
                    <item.component {...props} /> : 
                    <Redirect to={{pathname: '/login', state: {from: props.location }}} />
                  )
                )} />
            })}
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return { token: state.token }
// }
// export default connect(mapStateToProps)(App)

export default App;