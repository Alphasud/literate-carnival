import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { removeFromCart } from "./cartSlice";

export default function DeleteItem({ pizzaId }: { pizzaId: string }): React.JSX.Element {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(removeFromCart(pizzaId));
  }
  return (
    <Button type="small" onClick={handleDelete}>
      Delete
    </Button>
  );
}
