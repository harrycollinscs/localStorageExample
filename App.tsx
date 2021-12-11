import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import store, {persistor} from './store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {setUser} from './store/actions';
import Home from './src/components/pages/Home';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {user} = store.getState();
  console.log({user})

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const dummyLogin = () => {
    store.dispatch(
      setUser({
        __id: 12345,
        name: {
          firstName: 'Harry',
          lastName: 'Collins',
        },
        email: 'harrycol97@gmail.com',
        accessToken: 'dummyToken',
      }),
    );
  };

  return (
    <Provider store={store}>
      <PersistGate loading={<View />} persistor={persistor}>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <Home />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  textInput: {
    margin: 16,
    padding: 10,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
