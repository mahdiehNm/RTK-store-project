import { createQueryObject } from "../helper/helper";
import { FaListUl } from "react-icons/fa";
import styles from "./SideBar.module.css";
import { categories } from "../constants/List";

const SideBar = ({ query, setQuery }) => {
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();
    if (tagName !== "LI") return; //یعنی اگه اون المان ال ای نبود این فانکشن اجرا نشود
    // setQuery((query) => ({ ...query, category }));
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLowerCase() === query.category
                ? styles.selected
                : null
            }
          >
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
