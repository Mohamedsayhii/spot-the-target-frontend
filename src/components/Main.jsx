import styled from 'styled-components';

const MainComponent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-grow: 1;
`;

function Main() {
	return (
		<MainComponent>
			<h1>Choose your playground</h1>
		</MainComponent>
	);
}

export default Main;
