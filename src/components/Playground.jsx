import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const PlaygroundWrapper = styled.div`
	display: flex;
	flex-direction: column;

	img {
		flex-grow: 1;
	}
`;

function Playground() {
	const { playgroundName } = useParams();

	return (
		<PlaygroundWrapper>
			<Header />
			<img src={`/src/assets/${playgroundName}.gif`} alt='' />
		</PlaygroundWrapper>
	);
}

export default Playground;
