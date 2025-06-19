import { createBoard } from '@wixc3/react-board';
import { ThankYou } from '../../../src/components/thank-you/thank-you';

export default createBoard({
    name: 'ThankYou',
    Board: () => <ThankYou />,
});
