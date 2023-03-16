import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

//* Redux
import {Provider} from 'react-redux';
import {store} from './src/store';
import {Navigator} from './src/navigation/Navigator';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
