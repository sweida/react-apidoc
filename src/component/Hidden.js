import React, { Component, Fragment } from 'react'

export default class Hidden extends Component {
    render() {
        const { visible, children } = this.props
        const content = visible ? children : null
        return (
            <Fragment>
                {content}
            </Fragment>
        )
    }
}