'use client';
import { ThemeProvider as NextThemeProvider } from 'next-theme';
import { type ThemeProviderProps } from 'next-theme/dist';
/**TODO:: Fix type issue */

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
