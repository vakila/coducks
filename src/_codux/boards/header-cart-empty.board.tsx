import { createBoard } from '@wixc3/react-board';
import { Header } from '../../components/header';

export default createBoard({
    name: 'Header (Cart empty)',
    Board: () => <div>
        <Header cart={[]}  />
    </div>
});
