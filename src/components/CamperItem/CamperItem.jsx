// import style from "./CamperItem.module.css";
// import IconHeart from "../../assets/icons/heart.svg?react";
// import IconHeartPressed from "../../assets/icons/heart-pressed.svg?react";
// import IconStar from "../../assets/icons/star.svg?react";
// import IconLocation from "../../assets/icons/map.svg?react";
// import CamperFeatures from "../CamperFeatures/CamperFeatures.jsx";
// import { Link } from "react-router-dom";
// import { CamperFeaturesMin } from "../CamperFeatures/CamperFeaturesList.jsx";

// const CamperItem = ({ camper = {}, favourites = [], toggleFavourite }) => {
//   // ✅ безпечні значення
//   const favIds = Array.isArray(favourites) ? favourites : [];
//   const camperId = camper?.id != null ? String(camper.id) : "";
//   const isFavourite = favIds.includes(camperId);

//   const priceNum = Number.isFinite(Number(camper?.price)) ? Number(camper.price) : 0;
//   const price = priceNum.toFixed(2);

//   const reviews = Array.isArray(camper?.reviews) ? camper.reviews : [];
//   const averageRating = reviews.length
//     ? (
//         reviews.reduce((sum, r) => sum + (Number(r?.reviewer_rating) || 0), 0) /
//         reviews.length
//       ).toFixed(1)
//     : "0.0";

//   const thumb = camper?.gallery?.[0]?.thumb || "";
//   const name = camper?.name || "Unnamed camper";
//   const location = camper?.location || "—";
//   const description = camper?.description || "";

//   const handleToggleFavourite = () => {
//     if (typeof toggleFavourite === "function" && camper?.id != null) {
//       toggleFavourite(camper.id);
//     }
//   };

//   return (
//     <div className={style.item}>
//       <img src={thumb} alt={name} className={style.image} />

//       <div className={style.infoBlock}>
//         <div className={style.infoWrapper}>
//           <div>
//             <div className={style.generalBlock}>
//               <h2 className={style.general}>{name}</h2>

//               <div className={style.price}>
//                 <p className={style.general}>€{price}</p>
//                 <button
//                   type="button"
//                   onClick={handleToggleFavourite}
//                   className={style.btnFavorite}
//                   aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
//                 >
//                   {isFavourite ? <IconHeartPressed /> : <IconHeart />}
//                 </button>
//               </div>
//             </div>

//             <div className={style.reviewLocationBlock}>
//               <div className={style.reviewLocationFlex}>
//                 <IconStar className={style.iconStar} />
//                 <p>
//                   {averageRating} ({reviews.length} {reviews.length === 1 ? "Review" : "Reviews"})
//                 </p>
//               </div>

//               <div className={style.reviewLocationFlex}>
//                 <IconLocation className={style.iconStar} />
//                 <p>{location}</p>
//               </div>
//             </div>
//           </div>

//           <div className={style.descriptionBlock}>
//             <p className={style.description}>{description}</p>
//           </div>

//           <div className={style.propertiesBlock}>
//             <CamperFeatures camper={camper} list={CamperFeaturesMin} />
//           </div>
//         </div>

//         <div>
//           <Link to={`/catalog/${camperId}`} className={style.button}>
//             Show more
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CamperItem;

import style from "./CamperItem.module.css";
import IconHeart from "../../assets/icons/heart.svg?react";
import IconHeartPressed from "../../assets/icons/heart-pressed.svg?react";
import IconStar from "../../assets/icons/star.svg?react";
import IconLocation from "../../assets/icons/map.svg?react";
import CamperFeatures from "../CamperFeatures/CamperFeatures.jsx";
import { Link } from "react-router-dom";
import { CamperFeaturesMin } from "../CamperFeatures/CamperFeaturesList.jsx";
const CamperItem = ({ camper = {}, favourites = [], toggleFavourite }) => {
  // ✅ favourites завжди масив
  const favIds = Array.isArray(favourites) ? favourites : [];
  const camperId = camper?.id != null ? String(camper.id) : "";
  const isFavourite = favIds.includes(camperId);

  // ✅ price
  const priceNum = Number.isFinite(Number(camper?.price)) ? Number(camper.price) : 0;
  const price = priceNum.toFixed(2);

  // ✅ reviews
  const reviews = Array.isArray(camper?.reviews) ? camper.reviews : [];
  const averageRating = reviews.length
    ? (
        reviews.reduce((sum, r) => sum + (Number(r?.reviewer_rating) || 0), 0) /
        reviews.length
      ).toFixed(1)
    : "0.0";

  // ✅ gallery + заглушка
  const thumb = camper?.gallery?.[0]?.thumb || null;
  const name = camper?.name || "Unnamed camper";
  const location = camper?.location || "—";
  const description = camper?.description || "";

  // ✅ toggleFavourite захищений
  const handleToggleFavourite = () => {
    if (typeof toggleFavourite === "function" && camper?.id != null) {
      toggleFavourite(camper.id);
    }
  };

  return (
    <div className={style.item}>
      {thumb ? (
        <img src={thumb} alt={name} className={style.image} />
      ) : (
        <div className={style.noImage}>No image</div>
      )}

      <div className={style.infoBlock}>
        <div className={style.infoWrapper}>
          <div>
            {/* Назва + ціна + обране */}
            <div className={style.generalBlock}>
              <h2 className={style.general}>{name}</h2>

              <div className={style.price}>
                <p className={style.general}>€{price}</p>
                <button
                  type="button"
                  onClick={handleToggleFavourite}
                  className={style.btnFavorite}
                  aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
                >
                  {isFavourite ? <IconHeartPressed /> : <IconHeart />}
                </button>
              </div>
            </div>

            {/* Рейтинг + Локація */}
            <div className={style.reviewLocationBlock}>
              <div className={style.reviewLocationFlex}>
                <IconStar className={style.iconStar} />
                <p>
                  {averageRating} ({reviews.length}{" "}
                  {reviews.length === 1 ? "Review" : "Reviews"})
                </p>
              </div>

              <div className={style.reviewLocationFlex}>
                <IconLocation className={style.iconStar} />
                <p>{location}</p>
              </div>
            </div>
          </div>

          {/* Опис */}
          <div className={style.descriptionBlock}>
            <p className={style.description}>{description}</p>
          </div>

          {/* Фічі */}
          <div className={style.propertiesBlock}>
            <CamperFeatures camper={camper} list={CamperFeaturesMin} />
          </div>
        </div>

        {/* Кнопка Show more */}
        <div>
          <Link to={`/catalog/${camperId}`} className={style.button}>
            Show more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CamperItem;
