import React, { Component } from 'react'
class Part1 extends Component {
    render() {
        console.log("--------user:", this.props.location)

        const user = {
            username: this.props.location.state.username,
            password: this.props.location.state.password,
        }
        return (<div className="App">
            this is part1
    
        <div>
                用户名：{user && user.username || 'null'}
            </div>

            <div>
                密码：{user && user.password || 'null'}
            </div>

            <div>
                <button onClick={() => this.props.history.replace('/')}>返回首页</button>
            </div>
        </div>
        );
    }
}

export default Part1