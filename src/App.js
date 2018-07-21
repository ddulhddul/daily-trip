import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MainList from './components/main/MainList'

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title : navigation.getParam('itemId', 'Item Id') + '\'s detail'
    }
  }
  render() {
    const {navigation} = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID')
    const otherParam = navigation.getParam('otherParam', 'default value...')
    const params = this.props.navigation.state.params || {}
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>{ params.itemId }</Text>
        <Text>{ params.otherParam }</Text>
        <Button
          title="item id ++"
          onPress={() => navigation.setParams({itemId: params.itemId+1})}
        />
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        /><Button
          title="push Home"
          onPress={() => navigation.push('Home')}
        />
        <Button
          title="Back to Top"
          onPress={() => navigation.popToTop()}
        />
        <Button
          title="Go back"
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }
}

 const MainStack = createStackNavigator({
    MainList: MainList,
    Details: DetailsScreen
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
});


// Modal
class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}


const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
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