import styled from 'styled-components';
import PlaygroundPreview from './PlaygroundPreview';

const MainComponent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-grow: 0.8;
	gap: 2rem;

	.playgrounds {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 90%;
		flex-grow: 0.2;
	}
`;

function Main() {
	return (
		<MainComponent>
			<h1>Choose your playground</h1>
			<div className='playgrounds'>
				<PlaygroundPreview playgroundName={'Carnisol'} />
				<PlaygroundPreview playgroundName={'Medieval'} />
				<PlaygroundPreview playgroundName={'Prehistoric'} />
			</div>
		</MainComponent>
	);
}

export default Main;
