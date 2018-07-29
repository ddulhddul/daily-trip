import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MainList from './components/main/MainList'
import DetailComponent from './components/detail/DetailComponent'
import AddMainComponent from './components/main/AddMainComponent'

 const MainStack = createStackNavigator({
    MainList: MainList,
    Details: DetailComponent
  },{
    initialRouteName: 'MainList',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
})

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    AddMainComponent: {
      screen: AddMainComponent,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default class App extends React.Component{
  render(){
    return <RootStack />
  }
}