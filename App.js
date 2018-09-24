import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

import Main from "./src/Main";
import storePersist from "./src/config/store";

const persist = storePersist();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={persist.store}>
           <PersistGate loading={null} persistor={persist.persistor}>
              <Main />
          </PersistGate>
      </Provider>
    );
  }
}
