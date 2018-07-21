import React from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';

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

  render() {
    let test = []
    for (let index = 0; index < 100; index++) {
      test.push(index);  
    }
    return (
      <View style={styles.contentContainer}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here'
          })}
        />
        <ScrollView contentContainerStyle={styles.scrollView}>
          {
            test.map((value, index, array) => {
              return <View key={{value}} style={styles.scrollComponent}>
                <Text>value</Text>
              </View>
            })
          }
        </ScrollView>
      </View>
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
    }

})