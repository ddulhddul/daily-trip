import React from 'react';
import { View, Picker, StyleSheet } from 'react-native';
import { DatePicker, Text, Button, Container, Content } from "native-base";
import jsonData from '../data.json'

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../actions'; //Import your actions

class AddMainComponent extends React.Component {
  constructor(){
    super()
    this.state = {
      nation: undefined,
      startDate: undefined,
      endDate: undefined,
      saveTry: false
    }
    this.setDate = this.setDate.bind(this);
  }

  setDate(dateNm,newDate) {
    let stateObj = {}
    stateObj[dateNm] = newDate
    this.setState(stateObj);
  }

  render() {
    const {saveTry, nation, startDate, endDate} = this.state
    const nationStyle = (!saveTry || nation) ? undefined : styles.invalid
    const startDateStyle = (!saveTry || startDate) ? undefined : styles.invalid
    let endDateStyle = (!saveTry || endDate) ? undefined : styles.invalid
    if(endDate && startDate && endDate.getTime() < startDate.getTime()) endDateStyle = styles.invalid
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30, padding: 30 }}>여행 정보 입력</Text>
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 20,
          }}>
          <View style={[{flex: 1},nationStyle]}>
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
          <View style={[{flex:0.5, margin:10},startDateStyle]}>
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
              onDateChange={(date)=>this.setDate('startDate', date)}
            />
          </View>
          <View style={[{flex:0.5, margin:10},endDateStyle]}>
            <DatePicker
              style={styles.invalid}
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
              onDateChange={(date)=>this.setDate('endDate', date)}
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
              this.setState({saveTry: true})
              if(saveTry && 
                (!nationStyle && !startDateStyle && !endDateStyle)){
                this.props.insert({
                  nation: this.state.nation,
                  startDate: this.state.startDate,
                  endDate: this.state.endDate
                })
                this.props.navigation.goBack()
              }
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

const styles = StyleSheet.create({
  invalid: {
    borderColor: 'red',
    borderWidth: 2,
    borderStyle: 'solid'
  }
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(undefined, mapDispatchToProps)(AddMainComponent);