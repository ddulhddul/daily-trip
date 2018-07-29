import React from 'react';
import { View, Text, Button, Picker } from 'react-native';
import jsonData from './nation.json'

export default class AddMainComponent extends React.Component {
  constructor(){
    super()
    this.state = {
      nation: ''
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>여행 정보 입력</Text>
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 20,
          }}>
          <View style={{flex: 1}}>
            <Picker
              selectedValue={this.state.nation}
              onValueChange={(itemValue, itemIndex) => this.setState({nation: itemValue})}>
              <Picker.Item label="국가" value="" />
              {
                jsonData.nation.map((obj)=>{
                  return <Picker.Item label={obj.name} value={obj.code} key={obj.code} />
                })
              }
            </Picker>
          </View>
        </View>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Back"
        />
      </View>
    );
  }
}