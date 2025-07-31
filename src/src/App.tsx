import {
  FluentProvider,
  Theme,
  webLightTheme,
} from '@fluentui/react-components';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Router from './Router';

// Create custom theme with your desired button color
const customTheme: Theme = {
  ...webLightTheme,
  colorBrandBackground: '#003cac',
  colorBrandBackgroundHover: '#002a7a',
  colorBrandBackgroundPressed: '#001f5c',
  colorBrandForegroundLink: '#1f52b6',
  colorBrandForegroundLinkHover: '#003395',
  colorBrandForegroundLinkPressed: '#002169',
  colorBrandForegroundLinkSelected: '#003cac',
};

function App() {
  return (
    <FluentProvider theme={customTheme}>
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </FluentProvider>
  );
}

export default App;
