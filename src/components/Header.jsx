import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;

	.nav-buttons {
		display: flex;
		gap: 2rem;
	}
`;

function Header() {
	return (
		<Navbar>
			<h1>Spot The Target</h1>
			<div className='nav-buttons'>
				<h1>HOME</h1>
				<h1>LEADERBOARDS</h1>
			</div>
		</Navbar>
	);
}

export default Header;
