import s from "./CamperFeatures.module.css";

export default function CamperFeatures({ camper, list }) {
  return (
    <>
      {list.map((item) => {
        const camperValue = camper[item.key];

        const shouldRender =
          (item.value === "true" && camperValue === true) ||
          camperValue === item.value;

        if (!shouldRender) return null;

        return (
          <p key={item.key} className={s.feature}>
            {item.icon} {item.label}
          </p>
        );
      })}
    </>
  );
}
