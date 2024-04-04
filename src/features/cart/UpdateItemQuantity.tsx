import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseQuantity, increaseQuantity } from "./cartSlice";

export default function UpdateItemQuantity({
  pizzaId,
  currentQuantity,
}: {
  pizzaId: string;
  currentQuantity: number;
}): React.JSX.Element {
  const dispatch = useDispatch();

  function addItem() {
    dispatch(increaseQuantity(pizzaId));
  }
  function removeItem() {
    dispatch(decreaseQuantity(pizzaId));
  }
  return (
    <div className="md-gap-3 flex items-center gap-1">
      <Button type="round" onClick={removeItem}>
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button type="round" onClick={addItem}>
        +
      </Button>
    </div>
  );
}
