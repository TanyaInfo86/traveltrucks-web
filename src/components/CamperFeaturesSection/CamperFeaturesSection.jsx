import CamperFeatures from "../CamperFeatures/CamperFeatures.jsx";
import { CamperFeaturesMax } from "../CamperFeatures/CamperFeaturesList.jsx";
import style from "./FeaturesContent.module.css";

const CamperFeaturesSection = ({ camper }) => {
  return (
    <div className={style.featuresWrapper}>
      <div className={style.properties}>
        <CamperFeatures camper={camper} list={CamperFeaturesMax} />
      </div>
      <div className={style.vehicleBlock}>
        <h3>Vehicle details</h3>
        <div className={style.line}></div>
        <div>
          <ul className={style.detailList}>
            <li className={style.detailItem}>
              <p>Form</p>
              <p>{(camper.form)}</p>
            </li>
            <li className={style.detailItem}>
              <p>Length</p>
              <p>{(camper.length)}</p>
            </li>
            <li className={style.detailItem}>
              <p>Width</p>
              <p>{(camper.width)}</p>
            </li>
            <li className={style.detailItem}>
              <p>Height</p>
              <p>{(camper.height)}</p>
            </li>
            <li className={style.detailItem}>
              <p>Tank</p>
              <p>{(camper.tank)}</p>
            </li>
            <li className={style.detailItem}>
              <p>Consumption</p>
              <p>{camper.consumption}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CamperFeaturesSection;