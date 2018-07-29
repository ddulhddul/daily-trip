import React from 'react';
import { View, Text, Button } from 'react-native';

export default class AddMainComponent extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>여행 정보 입력</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Back"
        />
      </View>
    );
  }
}