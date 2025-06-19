import { createBoard } from '@wixc3/react-board';
import { Caution } from '../../../src/components/caution/caution';

export default createBoard({
    name: 'Caution',
    Board: () => <Caution />,
});
