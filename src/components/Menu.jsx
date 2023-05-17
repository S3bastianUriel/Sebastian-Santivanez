import React from 'react';
import '@styles/Menu.scss';

const Menu = () => {
	return (
		<div className="Menu">
			<ul>
				<li>
					<a href="/" className="title">HOME</a>
				</li>
				<li>
					<a href="/aboutme">ABOUT ME</a>
				</li>
				<li>
					<a href="/projects">PROJECTS</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
