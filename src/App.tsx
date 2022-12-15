import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/defaultTheme';
import { Router } from './components/Router';
import { SkeletonTheme } from 'react-loading-skeleton';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SkeletonTheme
        baseColor={defaultTheme['base-profile']}
        highlightColor={defaultTheme['base-post']}
      >
        <Router />
      </SkeletonTheme>
      <GlobalStyle />
    </ThemeProvider>
  );
}
