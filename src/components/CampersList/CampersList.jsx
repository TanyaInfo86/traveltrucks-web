import style from "./CampersList.module.css";
import CamperItem from "../CamperItem/CamperItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/favorites/slice.js";

const CampersList = ({ campers, total, onLoadMore }) => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const toggleFavourite = (id) => {
    if (favorites.includes(id)) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  return (
    <div className={style.block}>
      <ul className={style.list}>
        {campers.map((camper) => (
          <li className={style.item} key={camper.id}>
            <CamperItem
              camper={camper}
              favourites={favorites}
              toggleFavourite={toggleFavourite}
            />
          </li>
        ))}
      </ul>
      {campers.length > 0 && campers.length < total && (
        <div className={style.btnBlock}>
          <button onClick={onLoadMore} className={style.loadMore}>
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default CampersList;