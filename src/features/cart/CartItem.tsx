import { formatCurrency } from "../../../utilities/helpers";
import Button from "../../ui/Button";

function CartItem({ item }: { item: any }): JSX.Element {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
