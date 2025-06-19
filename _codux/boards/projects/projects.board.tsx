import { createBoard } from '@wixc3/react-board';
import { Projects } from '../../../src/components/projects/projects';

export default createBoard({
    name: 'Projects',
    Board: () => <Projects />,
});
