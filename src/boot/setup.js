import * as Expo from "expo";
import React, { Component } from "react";
import { StyleProvider } from "native-base";

import App from "../App";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";

const Datastore = require('react-native-local-mongodb')

export default class Setup extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  componentWillMount() {
    let curThis = this
    let fontsReady = curThis.loadFonts();
    if(fontsReady){
      let db = new Datastore({ filename: 'asyncStorageKey' });
      db.loadDatabase(function (err) {    // Callback is optional
        curThis.setState({ isReady: true });
        console.log('db loaded....')
      });
    }
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    return 'ready'
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <StyleProvider style={getTheme(variables)}>
        <App />
      </StyleProvider>
    );
  }
}
