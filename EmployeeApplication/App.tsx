import React from 'react';
import {StatusBar} from 'react-native';
import AppNavigation from './src/pages/AppNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './src/store';

const App = () => {
  StatusBar.setHidden(true);
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigation />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
