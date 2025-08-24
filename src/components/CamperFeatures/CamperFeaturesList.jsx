import IconAC from "../../assets/icons/wind.svg?react";
import IconAutomatic from "../../assets/icons/diagram.svg?react";
import IconKitchen from "../../assets/icons/cup-hot.svg?react";
import IconTV from "../../assets/icons/tv.svg?react";
import IconBathroom from "../../assets/icons/shower.svg?react";
import IconMicrowave from "../../assets/icons/microwave.svg?react";
import IconGas from "../../assets/icons/gas-stove.svg?react";
import IconWater from "../../assets/icons/water-outline.svg?react";
import IconFridge from "../../assets/icons/fridge-outline.svg?react";
import IconRadio from "../../assets/icons/radios.svg?react";
import IconPetrol from "../../assets/icons/fuel-pump.svg?react";
import IconVan from "../../assets/icons/bi_grid-1x2.svg?react";
import IconFully from "../../assets/icons/bi_grid.svg?react";
import IconAlcove from "../../assets/icons/bi_grid-3x3-gap.svg?react";

// Мінімальний набір features (для бейджів у картці)
export const CamperFeaturesMin = [
  { key: "transmission", label: "Automatic", value: "automatic", icon: <IconAutomatic width="20px" height="20px" /> },
  { key: "engine",       label: "Petrol",     value: "petrol",    icon: <IconPetrol    width="20px" height="20px" /> },
  { key: "kitchen",      label: "Kitchen",    value: "true",      icon: <IconKitchen   width="20px" height="20px" /> },
  { key: "AC",           label: "AC",         value: "true",      icon: <IconAC        width="20px" height="20px" /> },
  { key: "TV",           label: "TV",         value: "true",      icon: <IconTV        width="20px" height="20px" /> },
  { key: "bathroom",     label: "Bathroom",   value: "true",      icon: <IconBathroom  width="20px" height="20px" /> },
];

// Максимальний набір features (для детальної сторінки)
export const CamperFeaturesMax = [
  { key: "transmission",  label: "Automatic",    value: "automatic", icon: <IconAutomatic width="20px" height="20px" /> },
  { key: "engine",        label: "Petrol",       value: "petrol",    icon: <IconPetrol    width="20px" height="20px" /> },
  { key: "kitchen",       label: "Kitchen",      value: "true",      icon: <IconKitchen   width="20px" height="20px" /> },
  { key: "AC",            label: "AC",           value: "true",      icon: <IconAC        width="20px" height="20px" /> },
  { key: "TV",            label: "TV",           value: "true",      icon: <IconTV        width="20px" height="20px" /> },
  { key: "bathroom",      label: "Bathroom",     value: "true",      icon: <IconBathroom  width="20px" height="20px" /> },
  { key: "radio",         label: "Radio",        value: "true",      icon: <IconRadio     width="20px" height="20px" /> },
  { key: "refrigerator",  label: "Refrigerator", value: "true",      icon: <IconFridge    width="20px" height="20px" /> },
  { key: "microwave",     label: "Microwave",    value: "true",      icon: <IconMicrowave width="20px" height="20px" /> },
  { key: "gas",           label: "Gas",          value: "true",      icon: <IconGas       width="20px" height="20px" /> },
  { key: "water",         label: "Water",        value: "true",      icon: <IconWater     width="20px" height="20px" /> },
];

// Фільтри для пошуку (кнопки-чіпи)
export const camperFeatureFilters = [
  { key: "AC",           label: "AC",        icon: <IconAC /> },
  { key: "transmission", label: "Automatic", icon: <IconAutomatic /> },
  { key: "kitchen",      label: "Kitchen",   icon: <IconKitchen /> },
  { key: "TV",           label: "TV",        icon: <IconTV /> },
  { key: "bathroom",     label: "Bathroom",  icon: <IconBathroom /> },
];

// Типи транспортних засобів (для фільтра "Vehicle type")
export const camperVehicleTypes = [
  { key: "panelTruck",      label: "Van",              icon: <IconVan /> },
  { key: "fullyIntegrated", label: "Fully Integrated", icon: <IconFully /> },
  { key: "alcove",          label: "Alcove",           icon: <IconAlcove /> },
];
