import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantitiy from "./UpdateItemQuantitiy";
import { useSelector } from "react-redux";
import { getQuantityById } from "./CartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const inCart = useSelector((state) => getQuantityById(state, pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantitiy pizzaId={pizzaId} inCart={inCart} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
