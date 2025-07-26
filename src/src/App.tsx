import {
  FluentProvider,
  webLightTheme
} from "@fluentui/react-components";

import './App.css'

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
    </FluentProvider>
  );
}

export default App
