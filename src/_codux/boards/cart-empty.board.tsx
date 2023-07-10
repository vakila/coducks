import { createBoard } from '@wixc3/react-board';
import { CartIcon } from '../../components/icons';
import { RUBBER_DUCKY } from '../../data'

export default createBoard({
    name: 'Cart (empty)',
    Board: () => <div>
        <CartIcon cart={[]} />
    </div>
});
