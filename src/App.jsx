import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { AppRouter } from "./router/AppRouter";
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
function App() {

  return (
    <>
      <Provider store= {store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
              <AppRouter />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
