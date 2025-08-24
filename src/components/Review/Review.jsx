import style from "./Review.module.css";
import IconStar from "../../assets/icons/star.svg?react";
import IconStarDefault from "../../assets/icons/star-default.svg?react";

const Review = ({ review }) => {
  const firstLater = review.reviewer_name[0];
  const rating = review.reviewer_rating;
  const totalStars = 5;

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.photo}>{firstLater}</div>
        <div>
          <p className={style.name}>{review.reviewer_name}</p>
          <div className={style.stars}>
            {[...Array(totalStars)].map((_, index) => (
              <span key={index}>
                {index < rating ? (
                  <IconStar className={style.iconStar} />
                ) : (
                  <IconStarDefault />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className={style.review}>{review.comment}</div>
    </>
  );
};

export default Review;