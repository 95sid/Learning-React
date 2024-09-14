import { useSelector } from "react-redux";

const Cart = () => {
  const store = useSelector((store) => store.cart.items);
  return <div className="font-bold text-3xt">
    Cart items-{store.length}
  </div>;
};
export default Cart;
