import { createBoard } from '@wixc3/react-board';
import { Brands } from '../../../src/components/brands/brands';

export default createBoard({
    name: 'Brands',
    Board: () => <Brands />,
});
