import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import store from '../../../../store';
import {setUser} from '../../../../store/actions';

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {user} = store.getState();
  console.log({user});

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

  const logout = () => {
    store.dispatch(setUser(null));
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      {!user ? (
        <View>
          <TextInput placeholder="Email address" style={styles.textInput} />
          <TextInput placeholder="Password" style={styles.textInput} />
          <Button title="Log in" onPress={dummyLogin} />
        </View>
      ) : (
        <View>
          <Text>Thanks for logging in</Text>
          <Button title="Log out" onPress={logout} />
        </View>
      )}
    </ScrollView>
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

export default Home;
