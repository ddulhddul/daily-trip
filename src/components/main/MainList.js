import React from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import MainComponent from './MainComponent'
import { Container, Content } from "native-base";

export default class MainList extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Info"
          color="#fff"
        />
      ),
      title: 'Main Title !!'
      /* the rest of this config is unchanged */
    };
  };

  clickAction=(param) => this.props.navigation.navigate('Details', {
    itemId: 86,
    otherParam: typeof param === 'string' ? param : 'anything you want here'
  })

  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <MainComponent clickAction={()=>this.clickAction('HaH')}/>
          <MainComponent clickAction={this.clickAction}/>
        </Content>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here'
          })}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    borderColor: 'red',
    borderWidth: 2,
    flex: 1,
    alignItems: 'center'
  },
  scrollView: {

  },
  scrollComponent: {
    width: '100%'
  },
  container: {
    backgroundColor: "#FFF"
  },

})