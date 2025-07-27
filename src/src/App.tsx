import { FluentProvider, webLightTheme } from '@fluentui/react-components';

import './App.css';

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      {/* TODO: Replace below heading with content */}
      <h1>Sample Heading</h1>
    </FluentProvider>
  );
}

export default App;
