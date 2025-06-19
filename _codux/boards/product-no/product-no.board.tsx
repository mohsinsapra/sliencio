import { createBoard } from '@wixc3/react-board';
import { ProductNo } from '../../../src/components/product-no/product-no';

export default createBoard({
    name: 'ProductNo',
    Board: () => <ProductNo />,
});
