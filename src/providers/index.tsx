'use client';
import ThemeProvider from './theme';

export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
