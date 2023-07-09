import { createBoard } from '@wixc3/react-board';
import { Header } from '../../components/header';
import { RUBBER_DUCKY, SCROOGE } from '../../data'

export default createBoard({
    name: 'Header',
    Board: () => <div>
        <Header cart={[{ product: RUBBER_DUCKY, size: "S", quantity: 2 }]} user={SCROOGE} />
    </div>,
    environmentProps: {
        canvasWidth: 800
    }
});
