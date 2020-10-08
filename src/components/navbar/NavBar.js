import React from 'react';
import { useHistory } from 'react-router-dom';

const NavBar = () => {
	const history = useHistory();
	return(
		<React.Fragment>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand" href="#">BestPrice</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<a className="nav-link" href="#" onClick={() => history.push('/')}>Log in</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#" onClick={() => history.push('/signup')}>Sign up</a>
					</li>
				</ul>
				</div>
			</nav>
		</React.Fragment>
	);
}

export default NavBar;