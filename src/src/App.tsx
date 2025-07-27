import { FluentProvider, webLightTheme } from '@fluentui/react-components';

import Example from './Example';
import './App.css';

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      {/* TODO: Replace below example element with content */}
      <Example />
    </FluentProvider>
  );
}

export default App;
