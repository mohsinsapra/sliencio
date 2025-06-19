import { createBoard } from '@wixc3/react-board';
import { BoldThinking } from '../../../src/components/bold-thinking/bold-thinking';

export default createBoard({
    name: 'BoldThinking',
    Board: () => <BoldThinking />,
});
