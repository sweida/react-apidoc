import React, { Component } from 'react'
import Header from './header'
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom'

class List extends Component {
    render() {
        return (
            <App />
        )
    }
}


function App() {
    return (
        <div>
            <Header />
            <ListControl />
        </div>
    );
}


function ListControl() {
    return (
<div className="container">

	<div className="post border border-success my-3 ">
		<div className="px-3 py-2" data-toggle="collapse" data-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne">
			<button className="btn btn-sm btn-success" type="button">post</button>
			<span className="font-weight-bold mr-3">/apply</span>
			<small>提额接口</small>
			<button type="button" className="close" data-dismiss="alert" aria-label="Close">
				<i className="fa fa-code text-success"></i>
			</button>
		</div>
		<div id="collapseOne1" className="border-top border-success collapse show" >
			<div className="card-body">
				<div className="row mb-3 border-bottom">
					<div className="col-2">
						<span>params</span>
						<p>(请求参数)</p>
					</div>
					<div className="col-10">
						<div className="alert alert-default">
					
							<blockquote className="blockquote text-white p-2 mb-0">
								<footer className="blockquote-footer text-danger">Someone famous in <cite title="Source Title">Source Title</cite></footer>
							</blockquote>
						</div>
					</div>
				</div>
				<div className="row ">
					<div className="col-2">
						<span>Responses</span>
						<p>(返回值)</p>
					</div>
					<div className="col-10">
						<div className="alert alert-default">
							<blockquote className="blockquote text-white p-2 mb-0">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
								<footer className="blockquote-footer text-danger">Someone famous in <cite title="Source Title">Source Title</cite></footer>
							</blockquote>
						</div>
					</div>
				</div>
				<div className="text-right">
					<button type="button" className="btn btn-sm btn-primary "> 
						<span className="btn-inner--icon">
							<i className="ni ni-planet"></i>
						</span>
						<span className="btn-inner--text">编 辑 </span>
					</button>
				</div>
			</div>
		</div>
	</div>
	<div className="get border border-info my-3">
		<div className="px-3 py-2" data-toggle="collapse" data-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne">
			<button className="btn btn-sm btn-info" type="button">get</button>
			<span className="font-weight-bold mr-3">/apply</span>
			<small>提额接口</small>
			<button type="button" className="close" data-dismiss="alert" aria-label="Close">
				<i className="fa fa-angle-right text-info"></i>
			</button>
		</div>
		<div id="collapseOne2" className="border-top border-info collapse" >
			<div className="card-body">
			<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
			</div>
		</div>
	</div>
	<div className="delete border border-danger my-3">
		<div className="px-3 py-2" data-toggle="collapse" data-target="#collapseOne3" aria-expanded="true" aria-controls="collapseOne">
			<button className="btn btn-sm btn-danger" type="button">delete</button>
			<span className="font-weight-bold mr-3">/apply</span>
			<small>提额接口</small>
			<button type="button" className="close" data-dismiss="alert" aria-label="Close">
				<i className="fa fa-angle-right text-danger"></i>
			</button>
		</div>
		<div id="collapseOne3" className="border-top border-danger collapse" >
			<div className="card-body">
			<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
			</div>
		</div>
	</div>
	<div className="put border border-warning my-3">
		<div className="px-3 py-2" data-toggle="collapse" data-target="#collapseOne4" aria-expanded="true" aria-controls="collapseOne">
			<button className="btn btn-sm btn-warning" type="button">put</button>
			<span className="font-weight-bold mr-3">/apply</span>
			<small>提额接口</small>
			<button type="button" className="close" data-dismiss="alert" aria-label="Close">
				<i className="fa fa-angle-right text-warning"></i>
			</button>
		</div>
		<div id="collapseOne4" className="border-top border-warning collapse">
			<div className="card-body">
			<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
			</div>
		</div>
	</div>


</div>
    )
}

export default List