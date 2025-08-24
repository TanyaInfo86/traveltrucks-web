// src/redux/filters/slice.js
import { createSlice } from "@reduxjs/toolkit";

// Доступні ключі для "обладнання" (булеві фільтри)
const FEATURE_KEYS = [
  "AC",
  "kitchen",
  "TV",
  "bathroom",
  "radio",
  "refrigerator",
  "microwave",
  "gas",
  "water",
];

// Доступні типи кузова
const FORMS = ["alcove", "panelTruck", "fullyIntegrated"];

// Нормалізація значення трансмісії
// дозволяємо '', 'automatic', 'manual' або булеве true -> 'automatic'
const normalizeTransmission = (v) =>
  v === "automatic" || v === "manual" ? v : v === true ? "automatic" : "";

// Початковий стан — плоский, щоб було просто мапити у query params
const initialState = {
  location: "",
  transmission: "", // 'automatic' | 'manual' | ''
  form: "", // 'alcove' | 'panelTruck' | 'fullyIntegrated' | ''
  // булеві опції
  AC: false,
  kitchen: false,
  TV: false,
  bathroom: false,
  radio: false,
  refrigerator: false,
  microwave: false,
  gas: false,
  water: false,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    // Масове оновлення — акуратно нормалізуємо поля
    setFilters(state, action) {
      const p = action.payload || {};

      if ("location" in p) state.location = (p.location ?? "").trim();
      if ("form" in p) state.form = FORMS.includes(p.form) ? p.form : "";
      if ("transmission" in p)
        state.transmission = normalizeTransmission(p.transmission);

      for (const k of FEATURE_KEYS) {
        if (k in p) state[k] = !!p[k];
      }
    },

    // Точкове оновлення одного ключа
    setFilter(state, action) {
      const { key, value } = action.payload ?? {};
      if (!key) return;

      if (key === "location") state.location = (value ?? "").trim();
      else if (key === "form") state.form = FORMS.includes(value) ? value : "";
      else if (key === "transmission")
        state.transmission = normalizeTransmission(value);
      else if (FEATURE_KEYS.includes(key)) state[key] = !!value;
    },

    // Зручний тумблер для булевих фільтрів (напр. кліком по чіпу)
    toggleFeature(state, action) {
      const key = action.payload;
      if (FEATURE_KEYS.includes(key)) state[key] = !state[key];
    },

    // Скидання у дефолт
    resetFilters() {
      return initialState;
    },
  },
});

export const { setFilters, setFilter, toggleFeature, resetFilters } =
  filtersSlice.actions;

export const filterReducer = filtersSlice.reducer;

// (опційно) зручно мати селектор тут же
export const selectFilters = (state) => state.filters;
