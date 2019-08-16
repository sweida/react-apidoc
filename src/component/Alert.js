import React from 'react'

class Alert extends React.Component {
    render() {
        let alertMain
        if (this.props.show) {
            alertMain = (
                <div className="message">
                    <div className="alert col-lg-4 m-auto alert-success alert-dismissible fade show " role="alert">
                        <span className="alert-icon mr-2"><i className="ni ni-check-bold"></i></span>
                        <span className="alert-text"><strong></strong> {this.props.message}</span>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            )
        } else {
            alertMain = null
        }
        return (alertMain)
    }
}


export default Alert;