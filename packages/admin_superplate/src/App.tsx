import "styles/global.scss";
import { RootStoreProvider } from "store";
import "./i18n";

import Home from "pages";

function App(): JSX.Element {
  return (
    <RootStoreProvider>
      <div className="App">
        <Home />
      </div>
    </RootStoreProvider>
  );
}

export default App;
