import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem;

	.title {
		font-size: 5rem;
	}

	.nav-buttons {
		display: flex;
		gap: 2rem;
	}
`;

function Header({ playground }) {
	return (
		<Navbar>
			<h1 className='title'>Spot The Target</h1>
			<div className='nav-buttons'>
				{playground && (
					<Link to='/'>
						<h1>Home</h1>
					</Link>
				)}
				<Link to='/leaderboards'>
					<h1>Leaderboards</h1>
				</Link>
			</div>
		</Navbar>
	);
}

export default Header;
