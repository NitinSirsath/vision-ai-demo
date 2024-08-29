import { ThemeProvider } from '@emotion/react';
import { darkTheme, lightTheme } from './theme/theme';
import AppRouter from './routes/AppRouter';
import useThemeStore from './store/theme/themeStore';

function App() {
  const { darkMode } = useThemeStore();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
