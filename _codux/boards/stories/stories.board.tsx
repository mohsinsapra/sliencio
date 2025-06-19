import { createBoard } from '@wixc3/react-board';
import { Stories } from '../../../src/components/stories/stories';

export default createBoard({
    name: 'Stories',
    Board: () => <Stories />,
});
