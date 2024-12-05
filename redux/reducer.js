import { createSlice } from "@reduxjs/toolkit";

// Початковий стан
const initialState = {
  userInfo: null, // { uid, email, displayName, avatar, login }
  avatarPath: null,
};

// Створення slice для користувача
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    clearUserInfo(state) {
      state.userInfo = null;
    },
    setAvatarPath(state, action) {
      state.avatarPath = action.payload;
    },
  },
});

// Експорт дій для використання у компонентах
export const { setUserInfo, clearUserInfo, setAvatarPath } = userSlice.actions;

// Експорт ред'юсера для підключення до Store
export default userSlice.reducer;
