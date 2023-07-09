import { createBoard } from '@wixc3/react-board';
import { CartIcon } from '../../components/icons';
import { RUBBER_DUCKY } from '../../data'

export default createBoard({
    name: 'Cart',
    Board: () => <div>
        <CartIcon cart={[{ product: RUBBER_DUCKY, size: "S", quantity: 2 }]} />
    </div>
});
