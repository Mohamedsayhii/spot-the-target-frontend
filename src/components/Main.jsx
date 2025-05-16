import styled from 'styled-components';
import PlaygroundPreview from './PlaygroundPreview';

const MainComponent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-grow: 1;

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
				<PlaygroundPreview
					playgroundTitle={'Carnisol'}
					playgroundImage={'/src/assets/carnisol.gif'}
				/>
				<PlaygroundPreview
					playgroundTitle={'Medieval'}
					playgroundImage={'/src/assets/medieval.gif'}
				/>
				<PlaygroundPreview
					playgroundTitle={'Prehistoric'}
					playgroundImage={'/src/assets/prehistoric.gif'}
				/>
			</div>
		</MainComponent>
	);
}

export default Main;
