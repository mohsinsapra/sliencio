import { createBoard } from '@wixc3/react-board';
import { ModelCanvas } from '../../../src/components/model-canvas/model-canvas';

export default createBoard({
    name: 'ModelCanvas',
    Board: () => <ModelCanvas />,
});
