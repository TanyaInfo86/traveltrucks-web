import { BeatLoader } from "react-spinners";
import style from "./Loader.module.css"; 

export default function Loader() {
  return (
    <div className={style.backdrop}>
      <BeatLoader color="#e44848" size={50} margin={18} />
    </div>
  );
}
