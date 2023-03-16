import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BookApp from './src/components/BookApp';
//* Redux
import {Provider} from 'react-redux';
import {store} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BookApp />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
