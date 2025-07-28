import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import Router from './Router';
import './App.css';

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <Router />
    </FluentProvider>
  );
}

export default App;
