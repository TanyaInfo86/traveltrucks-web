import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader.jsx";
import HeroSection from "../components/HeroSection/HeroSection.jsx";
import TravelBookingForm from "../components/TravelBookingForm/TravelBookingForm.jsx";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <HeroSection />
      <TravelBookingForm />
    </>
  );
}
