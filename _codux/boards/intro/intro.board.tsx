import { createBoard } from '@wixc3/react-board';
import { Intro } from '../../../src/components/intro/intro';

export default createBoard({
    name: 'Intro',
    Board: () => <Intro />,
});
