import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./Header/Header.jsx";
import { Toaster } from "react-hot-toast";
import Loader from "./Loader/Loader.jsx";
import AutoScrollTop from "./AutoScrollTop/AutoScrollTop.jsx";

const HomePage = lazy(() => import("../pages/HomePage.jsx"));
const CampersPage = lazy(() => import("../pages/CamperPage/CamperPage.jsx"));
const CamperDetailsPage = lazy(() => import("../pages/CamperDetailsPage/"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage.jsx"));

export default function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <AutoScrollTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CampersPage />} />
          <Route path="/catalog/:camperId" element={<CamperDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </Suspense>
    </>
  );
}
