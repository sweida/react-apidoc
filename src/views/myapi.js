import React, { Fragment }from 'react'
import Header from './header'
import "./list.css"
import { personApi } from '../server/api'
import Loading from 'component/Loading'

// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom'
import ApiCard from 'pages/apiCard'

import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css';
import "./list.css"
import "style/highlight.css"
import Footer from './footer.js'

class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            apidocList: [],
            loading: true
        };
	}
	componentDidMount() {
		personApi().then(res => {
			this.setState({
                apidocList: res.data.data,
                loading: false
            });
		})
		marked.setOptions({
			highlight: function (code) {
				return hljs.highlightAuto(code).value;
			},
			pedantic: false,
			gfm: true,
			tables: true,
			breaks: false,
			sanitize: false,
			smartLists: true,
			smartypants: false,
			xhtml: false
		}); 
	}

    render() {
		const list = this.state.apidocList.map((item) => {
			switch (item.requestType){
				case 'post':
					return <ApiCard key={item.id} data={item} colorType={"success"} marked={marked} />
				case 'get':
					return <ApiCard key={item.id} data={item} colorType={"info"} marked={marked} />
				case 'delete':
					return <ApiCard key={item.id} data={item} colorType={"danger"} marked={marked} />
				case 'put':
					return <ApiCard key={item.id} data={item} colorType={"warning"} marked={marked} />
			}
		});
        return (
            <>
                <Header />
                <div className="container mt-5">
                    {this.state.loading && <Loading />}
                    {list}
                </div>
                <Footer />
            </>
        );
    }
}


export default List

