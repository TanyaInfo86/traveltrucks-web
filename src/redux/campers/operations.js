// src/redux/campers/operations.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// окремий інстанс — легше додавати інтерсептори/хедери
const api = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

// булеві прапорці, які бекенд очікує як РЯДОК "true"
const BOOL_KEYS = [
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

// будуємо query params із фільтрів
const buildParams = ({ page = 1, limit = 4, filters = {} }) => {
  const params = { page, limit };

  if (filters.location) params.location = filters.location; // "Ukraine, Kyiv"
  if (filters.form) params.form = filters.form;             // "alcove" | "panelTruck" | "fullyIntegrated"

  // transmission: підтримка тумблера (true => "automatic") або точного значення
  if (filters.transmission === "automatic" || filters.transmission === "manual") {
    params.transmission = filters.transmission;
  } else if (filters.transmission === true) {
    params.transmission = "automatic";
  }

  // булеві опції — додаємо ТІЛЬКИ коли true, значенням "true"
  // підтримка як структури filters.features, так і плоскої
  const flags = filters.features ?? filters;
  for (const key of BOOL_KEYS) if (flags[key]) params[key] = "true";

  // (необов’язково) engine, якщо колись додаси
  if (filters.engine) params.engine = filters.engine; // "diesel" | "petrol" | "hybrid"

  return params;
};

// приводимо відповідь до стабільного формату
const normalizeList = (data, page) =>
  Array.isArray(data)
    ? { items: data, total: data.length, page }
    : {
        items: data?.items ?? [],
        total:
          typeof data?.total === "number"
            ? data.total
            : data?.items?.length ?? 0,
        page,
      };

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page = 1, limit = 4, filters = {} } = {}, thunkAPI) => {
    try {
      const res = await api.get("/campers", {
        params: buildParams({ page, limit, filters }),
        signal: thunkAPI.signal, // скасування попереднього запиту
      });

      return normalizeList(res.data, page);
    } catch (e) {
      const status = e?.response?.status;

      // Порожня сторінка — не помилка для UI
      if (status === 404) {
        return thunkAPI.fulfillWithValue({ items: [], total: 0, page });
      }

      return thunkAPI.rejectWithValue({
        message: e?.message ?? "Request failed",
        status,
      });
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchOneById",
  async (camperId, thunkAPI) => {
    try {
      const res = await api.get(`/campers/${camperId}`, {
        signal: thunkAPI.signal,
      });
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        message: e?.message ?? "Request failed",
        status: e?.response?.status,
      });
    }
  }
);
