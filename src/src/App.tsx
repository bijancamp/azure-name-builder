import {
  FluentProvider,
  Theme,
  webLightTheme,
} from '@fluentui/react-components';
import Router from './Router';
import './App.css';

// Create custom theme with your desired button color
const customTheme: Theme = {
  ...webLightTheme,
  colorBrandBackground: '#003cac',
  colorBrandBackgroundHover: '#002a7a',
  colorBrandBackgroundPressed: '#001f5c',
};

function App() {
  return (
    <FluentProvider theme={customTheme}>
      <Router />
    </FluentProvider>
  );
}

export default App;
