import Review from "../Review/Review.jsx";
import style from "./ReviewsSection.module.css";

const ReviewsSection = ({ camper }) => {
  const reviews = camper.reviews;

  return (
    <div className={style.rewiewsWrapper}>
      <ul className={style.rewiewsList}>
        {reviews.map((review, idx) => (
          <li key={idx}>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsSection;