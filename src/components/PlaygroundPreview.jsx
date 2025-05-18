import { Link } from 'react-router-dom';
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
		width: 100%;
		padding: 1rem;
		font-size: 1.5rem;
		font-weight: bold;
	}
`;

function PlaygroundPreview({ playgroundName }) {
	return (
		<PreviewWrapper>
			<h2>{playgroundName}</h2>
			<img
				src={`/src/assets/${playgroundName.toLowerCase()}.gif`}
				alt=''
			/>
			<Link to={`/${playgroundName.toLowerCase()}`}>
				<button>Play</button>
			</Link>
		</PreviewWrapper>
	);
}

export default PlaygroundPreview;
