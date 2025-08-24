// import Review from "../Review/Review.jsx";
// import style from "./ReviewsSection.module.css";

// const ReviewsSection = ({ camper }) => {
//   const reviews = camper.reviews;

//   return (
//     <div className={style.rewiewsWrapper}>
//       <ul className={style.rewiewsList}>
//         {reviews.map((review, idx) => (
//           <li key={idx}>
//             <Review review={review} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ReviewsSection;
import Review from "../Review/Review.jsx";
import styles from "./ReviewsSection.module.css";

export default function ReviewsSection({ camper }) {
  const reviews = Array.isArray(camper?.reviews) ? camper.reviews : [];

  if (!reviews.length) {
    return <p className={styles.empty}>No reviews yet.</p>;
  }

  return (
    <div className={styles.reviewsWrapper}>
      <ul className={styles.reviewsList}>
        {reviews.map((review, idx) => (
          <li key={`${review?.reviewer_name || "user"}-${idx}`}>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
}
