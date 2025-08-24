import { Link } from "react-router-dom";
import Container from "../Container/Container.jsx";
import s from "./NotFoundComponent.module.css";

export default function NotFound() {
  return (
    <section className={s.section} aria-labelledby="nf-heading">
      <Container>
        <div className={s.card}>
          <p className={s.code} aria-hidden="true">404</p>
          <h1 id="nf-heading" className={s.heading}>Page not found</h1>
          <p className={s.lead}>
            The page you are looking for might have been moved or is temporarily unavailable.
          </p>

          <Link to="/" className={s.cta} aria-label="Go back to homepage">
            Go Home
          </Link>
        </div>
      </Container>
    </section>
  );
}
