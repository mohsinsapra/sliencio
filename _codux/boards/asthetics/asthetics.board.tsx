import { createBoard } from '@wixc3/react-board';
import { Asthetics } from '../../../src/components/asthetics/asthetics';

export default createBoard({
    name: 'Asthetics',
    Board: () => <Asthetics />,
});
