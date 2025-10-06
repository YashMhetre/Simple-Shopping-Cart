import { ReactNode } from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeStoreType {
  theme: string;
  toggleTheme: () => void;
  isDark: boolean;
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface ThemeState {
  theme: Theme;
}


