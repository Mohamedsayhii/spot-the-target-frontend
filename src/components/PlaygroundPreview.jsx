import styled from 'styled-components';

const PreviewWrapper = styled.div`
	width: 25%;
	display: flex;
	flex-direction: column;
	text-align: center;
	gap: 1rem;

	h2 {
		font-size: 2.5rem;
	}

	img {
		height: 40rem;
	}

	button {
		padding: 1rem;
		font-size: 1.5rem;
	}
`;

function PlaygroundPreview({ playgroundTitle, playgroundImage }) {
	return (
		<PreviewWrapper>
			<h2>{playgroundTitle}</h2>
			<img src={playgroundImage} alt='' />
			<button>Play</button>
		</PreviewWrapper>
	);
}

export default PlaygroundPreview;
