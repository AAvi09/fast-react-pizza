import React from "react";
import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";

const UpdateOrder = ({ order }) => {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <button className="px-3 py-2 text-stone-600 bg-amber-200 rounded-lg uppercase font-semibold tracking-wide hover:bg-amber-300 active:bg-amber-400 transition-colors duration-200 cursor-pointer">
        Make Priority
      </button>
    </fetcher.Form>
  );
};

export default UpdateOrder;
export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
