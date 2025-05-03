import {Provider} from 'react-redux';
import Router from './src/navigation/stack';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
