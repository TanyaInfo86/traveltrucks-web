import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "favorites";

const load = () => {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const persist = (state) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* ignore */
  }
};

const initialState = load();

const favoritesSlice = createSlice({
  name: "favorites",
  initialState, // масив id (рядки)
  reducers: {
    addFavorite: (state, action) => {
      const id = String(action.payload);
      if (!state.includes(id)) {
        state.push(id);
        persist(state);
      }
    },
    removeFavorite: (state, action) => {
      const id = String(action.payload);
      const next = state.filter((x) => x !== id);
      if (next.length !== state.length) persist(next);
      return next;
    },
    // опційно: зручно для кнопки "серце"
    toggleFavorite: (state, action) => {
      const id = String(action.payload);
      if (state.includes(id)) {
        const next = state.filter((x) => x !== id);
        persist(next);
        return next;
      }
      state.push(id);
      persist(state);
    },
    // опційно: підхопити актуальні дані з localStorage
    hydrateFavorites: (state) => {
      const loaded = load();
      return Array.isArray(loaded) ? loaded : state;
    },
    // опційно: очистити обрані
    clearFavorites: () => {
      persist([]);
      return [];
    },
  },
});

export const {
  addFavorite,
  removeFavorite,
  toggleFavorite,
  hydrateFavorites,
  clearFavorites,
} = favoritesSlice.actions;

export const selectFavorites = (state) => state.favorites;
export const isFavoriteSelector = (id) => (state) =>
  state.favorites?.includes(String(id));

export default favoritesSlice.reducer;
