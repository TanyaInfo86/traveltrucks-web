import { Link } from "react-router-dom";
import Container from "../Container/Container.jsx";
import style from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={style.section}>
      <Container>
        <h1 className={style.title}>Campers of your dreams</h1>
        <p className={style.text}>You can find everything you want in our catalog</p>
        <Link to="/catalog" className={style.button}>View Now</Link>
      </Container>
    </section>
  );
};

export default HeroSection;
