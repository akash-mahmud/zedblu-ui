import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

type UiState = {
  mobileMenuOpen: boolean;
  searchOpen: boolean;
  sidebarOpen: boolean;
  videoModalOpen: boolean;
};

const initialState: UiState = {
  mobileMenuOpen: false,
  searchOpen: false,
  sidebarOpen: false,
  videoModalOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMobileMenuOpen(state, action: PayloadAction<boolean>) {
      state.mobileMenuOpen = action.payload;
    },
    toggleMobileMenu(state) {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    setSearchOpen(state, action: PayloadAction<boolean>) {
      state.searchOpen = action.payload;
    },
    setSidebarOpen(state, action: PayloadAction<boolean>) {
      state.sidebarOpen = action.payload;
    },
    setVideoModalOpen(state, action: PayloadAction<boolean>) {
      state.videoModalOpen = action.payload;
    },
  },
});

export const {
  setMobileMenuOpen,
  toggleMobileMenu,
  setSearchOpen,
  setSidebarOpen,
  setVideoModalOpen,
} = uiSlice.actions;

export function makeStore() {
  return configureStore({
    reducer: {
      ui: uiSlice.reducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
