import React, { Component } from 'react'
// import {} from 'react-router-dom'
class Part2 extends Component {
    render() {
        return (<div className="App">
            this is part2
    
        <ul>

                <li>
                    {/* <button onClick={() => this.props.history.push('part2/model1')}>通过push跳转到part2Model1</button> */}
                </li>


                <li>
                    {/* <button onClick={() => this.props.history.replace('part2/model1')}>通过replace跳转到part2Model1</button> */}
                </li>

                <li>
                    <button onClick={() => this.props.history.goBack()}>返回上一页</button>
                </li>

                <li>
                    <button onClick={() => this.props.history.replace('/')}>返回首页</button>
                </li>

            </ul>

        </div>
        );
    }
}

export default Part2