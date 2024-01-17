import React from 'react';
import './App.css';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './store/ConfigureStore';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;