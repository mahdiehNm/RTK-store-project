import { TbChecklist } from "react-icons/tb";
import styles from "./BasketSidebar.module.css";
import { useDispatch } from "react-redux";
import { checkout } from "../features/cart/cartSlice";

const BasketSidebar = ({ state }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.sidebar}>
      <div>
        <p>
          <TbChecklist />
          Total:
        </p>
        <span>{state.total} $</span>
      </div>

      <div>
        <p>
          {/* <FaHashtag/> */}
          Quantity:
        </p>
        <span>{state.itemsCounter}</span>
      </div>

      <div>
        <p>
          {/* <BsPatchCheck /> */}
          Status:
        </p>
        <span>{!state.checkout && "Pending..."}</span>
      </div>
      <button onClick={() => dispatch(checkout())}>Checkout</button>
    </div>
  );
};

export default BasketSidebar;
