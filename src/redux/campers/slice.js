import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers } from "./operations.js";

const initialState = {
  items: [],
  currentCamper: null, // було {}, зручніше як null
  total: 0,
  page: 1,
  isLoading: false,
  isLoadingMore: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    resetCampers: (state) => {
      state.items = [];
      state.currentCamper = null;
      state.total = 0;
      state.page = 1;
      state.isLoading = false;
      state.isLoadingMore = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // ===== list =====
      .addCase(fetchCampers.pending, (state, action) => {
        const firstPage = (action.meta?.arg?.page ?? 1) === 1;
        state.error = null;
        if (firstPage) state.isLoading = true;
        else state.isLoadingMore = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        const firstPage = (action.meta?.arg?.page ?? 1) === 1;

        state.items = firstPage
          ? (action.payload.items ?? [])
          : [...state.items, ...(action.payload.items ?? [])];

        state.total = action.payload.total ?? 0;
        state.page = action.meta?.arg?.page ?? 1;

        state.isLoading = false;
        state.isLoadingMore = false;
        state.error = null;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.isLoadingMore = false;
        state.error =
          action.payload?.message ?? action.payload ?? "Request failed";
      })

      // ===== details =====
      .addCase(fetchCamperById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.currentCamper = action.payload ?? null;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.payload?.message ?? action.payload ?? "Request failed";
      });
  },
});

export const { resetCampers } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
