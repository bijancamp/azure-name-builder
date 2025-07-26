import {
  FluentProvider,
  webLightTheme
} from "@fluentui/react-components";

import './App.css'

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <h1>Azure Name Builder</h1>
    </FluentProvider>
  );
}

export default App
