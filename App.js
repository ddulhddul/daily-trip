import React from "react";
import { Provider } from 'react-redux';
import store from './src/store'; //Import the store
import Setup from "./src/boot/setup";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Setup />
      </Provider>
    );
  }
}