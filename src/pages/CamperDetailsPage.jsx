import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { selectCamper } from "../redux/campers/selectors.js";

import { fetchCamperById } from "../redux/campers/operations.js";
import CamperDetails from  "../components/CamperDetails/CamperDetails";

const CamperDetailsPage = () => {
  const { camperId } = useParams();
  const dispatch = useDispatch();

  const camper = useSelector(selectCamper);

  useEffect(() => {
    dispatch(fetchCamperById(camperId));
  }, [camperId, dispatch]);

  return <CamperDetails camper={camper} />;
};

export default CamperDetailsPage;