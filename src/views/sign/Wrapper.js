import React from 'react'


class Wrapper extends React.Component {
    render() {
        return (
            <main>
                 <section className="section section-shaped my-0">
                     <div className="shape shape-style-1 bg-gradient-default">
                         <span></span>
                         <span></span>
                         <span></span>
                         <span></span>
                         <span></span>
                         <span></span>
                         <span></span>
                         <span></span>
                     </div>
                     <div className="container pt-lg-md">
                         <div className="row justify-content-center">
                             {this.props.children}
                         </div>
                     </div>
                 </section>
            </main>
        )
    }
}

export default Wrapper
