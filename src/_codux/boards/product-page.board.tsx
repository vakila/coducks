import { createBoard } from '@wixc3/react-board';
import { ProductPage } from '../../components/product-page';
import {RUBBER_DUCKY} from '../../data'

export default createBoard({
    name: 'Product page',
    Board: () => <div>
        <ProductPage product={RUBBER_DUCKY} addToCart={console.log} />
    </div>
});
