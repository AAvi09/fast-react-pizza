import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getQuantityById } from "../cart/CartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantitiy from "../cart/UpdateItemQuantitiy";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const inCart = useSelector((state) => getQuantityById(state, id));
  const isInCart = inCart > 0;

  const handleAddToCart = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };
    dispatch(addItem(newItem));
  };

  return (
    <li className="flex  gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex flex-col grow">
        <p className="font-medium ">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {isInCart && (
            <div className="flex items-center gap-4">
              <UpdateItemQuantitiy pizzaId={id} inCart={inCart} />

              <DeleteItem />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button onClick={handleAddToCart}>Add to cart</Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
