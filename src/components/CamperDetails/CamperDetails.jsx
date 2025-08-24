import Container from "../Container/Container.jsx";
import style from "./CamperDetails.module.css";
import IconStar from "../../assets/icons/star.svg?react";
import IconLocation from "../../assets/icons/map.svg?react";
import { useState } from "react";
import clsx from "clsx";
import ReviewsSection from "../ReviewsSection/ReviewsSection.jsx";
import TravelBookingForm from "../TravelBookingForm/TravelBookingForm.jsx";
import Loader from "../Loader/Loader.jsx";
import CamperFeaturesSection from "../CamperFeaturesSection/CamperFeaturesSection.jsx";

const CamperDetails = ({ camper }) => {
  const [openTab, setOpenTab] = useState("Features");

  if (!camper || !camper.reviews || !camper.gallery) {
    return <Loader />;
  }

  const tabs = [
    { name: "Features", content: <CamperFeaturesSection camper={camper} /> },
    { name: "Reviews", content: <ReviewsSection camper={camper} /> },
  ];

  const averageRating =
    camper.reviews.length > 0
      ? camper.reviews.reduce(
          (sum, review) => sum + review.reviewer_rating,
          0
        ) / camper.reviews.length
      : 0;

  const images = camper.gallery;

  return (
    <section className={style.section}>
      <Container>
        {!camper || !camper.reviews ? (
          <Loader />
        ) : (
          <div className={style.infoBlock}>
            <div className={style.generalBlock}>
              <h2 className={style.general}>{camper.name}</h2>

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

              <p className={style.general}>€{camper.price}.00</p>
            </div>

            <div className={style.imagesBlock}>
              {images.map((image) => (
                <img
                  key={image.thumb}
                  src={image.thumb}
                  alt={camper.name}
                  className={style.image}
                />
              ))}
            </div>

            <div className={style.descriptionBlock}>
              <p>{camper.description}</p>
            </div>

            <div className={style.tabBlock}>
              <div className={style.tabButtons}>
                {tabs.map((tab) => (
                  <button
                    key={tab.name}
                    onClick={() => setOpenTab(tab.name)}
                    className={clsx(style.tabButton, {
                      [style.active]: openTab === tab.name,
                    })}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>

              <div className={style.tabContentWrapper}>
                {tabs.map(
                  (tab) =>
                    openTab === tab.name && (
                      <div key={tab.name} className={style.tabContent}>
                        {tab.content}
                        <TravelBookingForm />
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default CamperDetails;