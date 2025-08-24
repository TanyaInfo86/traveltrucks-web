import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import style from "./CamperItem.module.css";
import IconHeart from "../../assets/icons/heart.svg?react";
import IconHeartPressed from "../../assets/icons/heart-pressed.svg?react";
import IconStar from "../../assets/icons/star.svg?react";
import IconLocation from "../../assets/icons/map.svg?react";

import CamperFeatures from "../CamperFeatures/CamperFeatures.jsx";
import { CamperFeaturesMin } from "../CamperFeatures/CamperFeaturesList.jsx";

const CamperItem = ({ camper = {}, favourites = [], toggleFavourite }) => {
  const camperId = camper?.id != null ? String(camper.id) : "";
  const hasDetails =
    camper?.id !== undefined &&
    camper?.id !== null &&
    camperId.trim() !== "" &&
    camperId !== "0";

  const isFavourite = useMemo(() => {
    const favIds = Array.isArray(favourites) ? favourites : [];
    return favIds.includes(camperId);
  }, [favourites, camperId]);

  const price = useMemo(() => {
    const n = Number(camper?.price);
    return Number.isFinite(n) ? n.toFixed(2) : "0.00";
  }, [camper?.price]);

  const { averageRating, reviewsCount } = useMemo(() => {
    const reviews = Array.isArray(camper?.reviews) ? camper.reviews : [];
    const avg =
      reviews.length === 0
        ? 0
        : reviews.reduce((s, r) => s + (Number(r?.reviewer_rating) || 0), 0) /
          reviews.length;
    return { averageRating: avg.toFixed(1), reviewsCount: reviews.length };
  }, [camper?.reviews]);

  const thumb = camper?.gallery?.[0]?.thumb || null;
  const name = camper?.name || "Unnamed camper";
  const location = camper?.location || "—";
  const description = camper?.description || "";

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
            <div className={style.generalBlock}>
              <h2 className={style.general}>{name}</h2>

              <div className={style.price}>
                <p className={style.general}>€{price}</p>
                <button
                  type="button"
                  onClick={handleToggleFavourite}
                  className={style.btnFavorite}
                  aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
                  aria-pressed={isFavourite}
                >
                  {isFavourite ? <IconHeartPressed /> : <IconHeart />}
                </button>
              </div>
            </div>

            <div className={style.reviewLocationBlock}>
              <div className={style.reviewLocationFlex}>
                <IconStar className={style.iconStar} />
                <p>
                  {averageRating} ({reviewsCount} {reviewsCount === 1 ? "Review" : "Reviews"})
                </p>
              </div>
              <div className={style.reviewLocationFlex}>
                <IconLocation className={style.iconStar} />
                <p>{location}</p>
              </div>
            </div>
          </div>

          <div className={style.descriptionBlock}>
            <p className={style.description}>{description}</p>
          </div>

          <div className={style.propertiesBlock}>
            <CamperFeatures camper={camper} list={CamperFeaturesMin} />
          </div>
        </div>

        <div className={style.actions}>
          {hasDetails ? (
            <Link to={`/catalog/${camperId}`} className={style.button}>
              Show more
            </Link>
          ) : (
            <button
              type="button"
              className={`${style.button} ${style.buttonDisabled}`}
              disabled
              aria-disabled="true"
              title="Details are unavailable"
            >
              Show more
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CamperItem;
