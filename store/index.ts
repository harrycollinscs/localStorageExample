import {createStore} from 'redux';
import rootReducer from './reducers';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
  blacklist: ['navigation'],
};

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer);
export const persistor = persistStore(store);

export default store;
