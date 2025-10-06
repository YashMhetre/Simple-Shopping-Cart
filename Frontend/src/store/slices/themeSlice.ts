import { createSlice } from '@reduxjs/toolkit';
import { ThemeState, Theme } from '../../types';

const loadThemeFromStorage = (): Theme => {
  const savedTheme = localStorage.getItem('theme');
  return (savedTheme === 'dark' || savedTheme === 'light') ? savedTheme : 'dark';
};

const initialState: ThemeState = {
  theme: loadThemeFromStorage(),
};

// Apply theme to DOM
const applyTheme = (theme: Theme) => {
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-bs-theme', theme);
  
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
};

// Apply initial theme
applyTheme(initialState.theme);

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      applyTheme(state.theme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

// Selectors
export const selectTheme = (state: { theme: ThemeState }) => state.theme.theme;
export const selectIsDark = (state: { theme: ThemeState }) => state.theme.theme === 'dark';

export default themeSlice.reducer;