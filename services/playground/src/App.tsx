import styled from '@emotion/styled';
import { classes, vars } from '@nx-monorepo-practice/theme';

export default function App() {
	return (
		<Container>
			<Title>Title</Title>
			<Text>Text Color - {vars.colors.$static.light.gray[500]}</Text>
		</Container>
	);
}

const Container = styled.div`
	width: 100dvw;
	height: 100dvh;
	background-color: var(--gray-100);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

const Title = styled.h1`
	${classes.typography.heading['4xl']}
	color: var(--gray-800);
`;

const Text = styled.p`
	${classes.typography.text['md']}
	color: ${vars.colors.$static.light.gray[500]};
`;
