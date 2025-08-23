import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader.jsx";
import HeroSection from "../components/HeroSection/HeroSection.jsx";
import TravelBookingForm from "../components/TravelBookingForm/TravelBookingForm.jsx";
import CamperFeatures from "../components/CamperFeatures/CamperFeatures.jsx";
import { CamperFeaturesMin } from "../components/CamperFeatures/CamperFeaturesList.jsx";
import CamperItem from "../components/CamperItem/CamperItem.jsx";
export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  const camperData = {
    transmission: "automatic",
    engine: "petrol",
    kitchen: true,
    AC: true,
    TV: true,
    bathroom: false, 
    };
  return (
    <>
      <HeroSection />
      <TravelBookingForm />
      <h2 style={{ margin: "32px 0" }}>Test Camper Features:</h2>
      <CamperFeatures camper={camperData} list={CamperFeaturesMin} />
      <  CamperItem />
    </>
  );
}
