export const selectCampers       = (state) => state.campers?.items ?? [];
export const selectCamper        = (state) => state.campers?.currentCamper ?? null;
export const selectTotalCampers  = (state) => state.campers?.total ?? 0;
export const selectPage          = (state) => state.campers?.page ?? 1;

export const selectIsLoading     = (state) => state.campers?.isLoading ?? false;
export const selectIsLoadingMore = (state) => state.campers?.isLoadingMore ?? false;
export const selectError         = (state) => state.campers?.error ?? null;
