import React from 'react';
import { View, Picker } from 'react-native';
import { DatePicker, Text, Button, Container, Content } from "native-base";
import jsonData from './nation.json'

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../actions'; //Import your actions

class AddMainComponent extends React.Component {
  constructor(){
    super()
    this.state = {
      nation: '',
      startDate: new Date(),
      endDate: new Date()
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30, padding: 30 }}>여행 정보 입력</Text>
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

        <View
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 20,
        }}>
          <View style={{flex:0.5}}>
            <DatePicker
              locale={"ko"}
              formatChosenDate={(date)=>{
                return [date.getFullYear(),date.getMonth()+1,date.getDate()].join('-')
              }}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"spinner"}
              placeHolderText="시작 날짜"
              textStyle={{ color: "green", textAlign: "center" }}
              placeHolderTextStyle={{ color: "#d3d3d3", textAlign: "center" }}
              onDateChange={(date)=>this.setDate({startDate:date})}
            />
          </View>
          <View style={{flex:0.5}}>
            <DatePicker
              locale={"ko"}
              formatChosenDate={(date)=>{
                return [date.getFullYear(),date.getMonth()+1,date.getDate()].join('-')
              }}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"spinner"}
              placeHolderText="종료 날짜"
              textStyle={{ color: "green", textAlign: "center" }}
              placeHolderTextStyle={{ color: "#d3d3d3", textAlign: "center" }}
              onDateChange={(date)=>this.setDate({endDate:date})}
            />
          </View>
        </View>
        <View
        style={{
          flexDirection: 'row',
          padding: 20,
        }}>
          <Button rounded success
            onPress={() => {
              this.props.insert({
                title: this.state.nation,
                contents: this.state.nation+'contents test'
              })
              this.props.navigation.goBack()
            }}>
            <Text>추가</Text>
          </Button>
          <Button rounded danger
            onPress={() => this.props.navigation.goBack()}>
            <Text>뒤로</Text>
          </Button>
        </View>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(undefined, mapDispatchToProps)(AddMainComponent);