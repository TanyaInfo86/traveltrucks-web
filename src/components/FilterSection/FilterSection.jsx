import { useDispatch } from "react-redux";
import { useState } from "react";
import style from "./FilterSection.module.css";
import { setFilters } from "../../redux/filters/slice.js";
import FilterButton from "../FilterButton/FilterButton.jsx";

import IconLocation from "../../assets/icons/map.svg?react";
import {
  camperFeatureFilters,
  camperVehicleTypes,
} from "../CamperFeatures/CamperFeaturesList.jsx";
import { cities } from "../../constants/cities.js";

const FilterSection = ({ filters }) => {
  const dispatch = useDispatch();
  const [localFilters, setLocalFilters] = useState(() => ({ ...filters }));

  const handleLocalChange = (next) => {
    setLocalFilters((prev) => ({ ...prev, ...next }));
  };

  const handleSearch = () => {
    dispatch(setFilters(localFilters));
  };

  return (
    <div className={style.block}>
      <label htmlFor="location" className={style.label}>
        Location
        <div className={style.inputWrapper}>
          <IconLocation
            className={`${style.icon} ${localFilters.location ? style.activeIcon : ""}`}
          />
          <select
            id="location"
            value={localFilters.location || ""}
            onChange={(e) => handleLocalChange({ location: e.target.value })}
            className={`${style.inputLocation} ${!localFilters.location ? style.placeholder : ""}`}
          >
            <option value="">City</option>
            {cities.map((c) => (
              // бекенд очікує повний рядок локації, напр. "Ukraine, Kyiv"
              <option key={c.key} value={c.label}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
      </label>

      <p className={style.subtitle}>Filters</p>

      <div className={style.vehicheBlock}>
        <h2 className={style.vehiche}>Vehicle equipment</h2>
        <div className={style.line}></div>

        <div className={style.wrapper}>
          {camperFeatureFilters.map((item) => (
            <FilterButton
              key={item.key}
              selected={!!localFilters[item.key]}
              onClick={() =>
                handleLocalChange({ [item.key]: !localFilters[item.key] })
              }
            >
              {item.icon}
              {item.label}
            </FilterButton>
          ))}
        </div>
      </div>

      <div className={style.vehicheBlock}>
        <h2 className={style.vehiche}>Vehicle type</h2>
        <div className={style.line}></div>

        <div className={style.wrapper}>
          {camperVehicleTypes.map((type) => {
            const isSelected = localFilters.form === type.key;
            return (
              <FilterButton
                key={type.key}
                selected={isSelected}
                onClick={() =>
                  handleLocalChange({ form: isSelected ? "" : type.key })
                }
              >
                {type.icon}
                {type.label}
              </FilterButton>
            );
          })}
        </div>
      </div>

      <div>
        <button onClick={handleSearch} className={style.button}>
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
