import { createBoard } from '@wixc3/react-board';
import { Product } from '../../../src/components/product/product';

export default createBoard({
    name: 'Product',
    Board: () => <Product />,
    environmentProps: {
        windowWidth: 894,
    },
});
