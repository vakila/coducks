import { createBoard } from "@wixc3/react-board";
import { Header } from "../../components/header";

export default createBoard({
  name: "Header",
  Board: () => (
    <div>
      <Header />
    </div>
  ),
  environmentProps: {
    canvasWidth: 800,
  },
});
