import style from "./CamperItem.module.css";
import IconHeart from "../../assets/icons/heart.svg?react";
import IconHeartPressed from "../../assets/icons/heart-pressed.svg?react";
import IconStar from "../../assets/icons/star.svg?react";
import IconLocation from "../../assets/icons/map.svg?react";
import CamperFeature from "../CamperFeatures/CamperFeatures.jsx";
import { Link } from "react-router-dom";
import { EquipmentListMin } from "../CamperEquipment/EquipmentList.jsx";

const CamperItem = ({ camper, favourites, toggleFavourite }) => {
  const isFavourite = favourites.includes(String(camper.id));
  const price = camper.price.toFixed(2);

  const averageRating =
    camper.reviews.reduce((sum, review) => sum + review.reviewer_rating, 0) /
    camper.reviews.length;

  return (
    <div className={style.item}>
      <img
        src={camper.gallery[0].thumb}
        alt={camper.name}
        className={style.image}
      />
      <div className={style.infoBlock}>
        <div className={style.infoWrapper}>
          <div>
            <div className={style.generalBlock}>
              <h2 className={style.general}>{camper.name}</h2>
              <div className={style.price}>
                <p className={style.general}>€{price}</p>
                <button
                  onClick={() => toggleFavourite(camper.id)}
                  className={style.btnFavorite}
                >
                  {isFavourite ? <IconHeartPressed /> : <IconHeart />}
                </button>
              </div>
            </div>

            <div className={style.reviewLocationBlock}>
              <div className={style.reviewLocationFlex}>
                <IconStar className={style.iconStar} />
                <p>
                  {averageRating}({camper.reviews.length} Reviews)
                </p>
              </div>
              <div className={style.reviewLocationFlex}>
                <IconLocation className={style.iconStar} />
                <p>{camper.location}</p>
              </div>
            </div>
          </div>

          <div className={style.descriptionBlock}>
            <p className={style.description}>{camper.description}</p>
          </div>

          <div className={style.propertiesBlock}>
            <CamperFeature camper={camper} list={FeatureListMin} />
          </div>
        </div>
        <div>
          <Link to={`/catalog/${camper.id}`} className={style.button}>
            Show more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CamperItem;