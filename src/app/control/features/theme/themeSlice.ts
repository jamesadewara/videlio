import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', initialTheme);

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: initialTheme,
  },
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      localStorage.setItem('theme', action.payload);
      document.documentElement.setAttribute('data-theme', action.payload);
    },
    toggleTheme: (state) => {
      const newTheme = state.value === 'light' ? 'dark' : 'light';
      state.value = newTheme;
      localStorage.setItem('theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
