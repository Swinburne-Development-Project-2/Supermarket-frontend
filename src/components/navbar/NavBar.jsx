import React, {Component} from 'react';

class NavBar extends Component{
	render(){
		return(
			<React.Fragment>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<a className="navbar-brand" href="#">BestPrice</a>
				  	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    	<span className="navbar-toggler-icon"></span>
				  	</button>

				  	{/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
				  	<ul className="navbar-nav mr-auto">
				      	<li className="nav-item active">
				        	<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
				      	</li>
					    <li className="nav-item">
					    	<a className="nav-link" href="#">Shopping list</a>
					    </li>
				      	<li className="nav-item dropdown">
				        	<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				          		Account
				        	</a>
				        	<div className="dropdown-menu" aria-labelledby="navbarDropdown">
				          		<a className="dropdown-item" href="#">Log in</a>
				          		<a className="dropdown-item" href="#">Sign up</a>
				        	</div>
				      	</li>
				    </ul>
				  </div> */}
				</nav>
			</React.Fragment>
		);
	}
}

export default NavBar;