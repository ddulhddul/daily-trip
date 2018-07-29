import React from 'react';
import { View, Text, Button } from 'react-native';

export default class DetailComponent extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title : navigation.getParam('title', 'Item Id') + '\'s detail'
    }
  }
  render() {
    const {navigation} = this.props;
    const _id = navigation.getParam('_id', 'NO-ID')
    const title = navigation.getParam('title', 'default value...')
    const contents = navigation.getParam('contents', 'default value...')
    const params = this.props.navigation.state.params || {}
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>_id : { params._id }</Text>
        <Text>title : { params.title }</Text>
        <Text>contents : { params.contents }</Text>
        <Button
          title="item id ++"
          onPress={() => navigation.setParams({_id: params._id+1})}
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