import { createBoard } from '@wixc3/react-board';
import App from '../../App'
import { RUBBER_DUCKY, SCROOGE } from '../../data';


export default createBoard({
    name: 'App (mobile)',
    Board: () => <App product={RUBBER_DUCKY} user={SCROOGE} />,
    environmentProps: {
        windowWidth: 400
    }
});
