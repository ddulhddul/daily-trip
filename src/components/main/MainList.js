import React from 'react';
import { StyleSheet, Alert, Text, Button } from 'react-native';
import MainComponent from './MainComponent'
import { Container, Content, Button as NativeButton, Fab, Icon } from "native-base";

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../actions'; //Import your actions

class MainList extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('AddMainComponent')}
          title="Info"
          color="#fff"
        />
      ),
      title: 'Main Title !!'
      /* the rest of this config is unchanged */
    };
  };

  constructor(props){
    super()
    this.state = {
      active: false
    }
  }

  componentDidMount=()=>{
    this.props.find({})
  }

  render() {
    let {mainList} = this.props
    return (
      <Container style={styles.container}>
        <Content padder>
          {
            (mainList && mainList.length) 
            ? mainList.map((obj)=>{
              return <MainComponent 
                key={obj._id} 
                clickAction={()=>{
                  this.props.navigation.navigate('Details', obj)
                }}
                longClickAction={()=>{
                  Alert.alert(
                    'Delete',
                    '삭제하시겠습니까?',
                    [
                      {text: 'Cancel', style: 'cancel'},
                      {text: 'OK', onPress: () => this.props.remove({})},
                    ],
                    { cancelable: true }
                  )
                }}
                title={obj.title}
                contents={obj.contents}
              />
            })
            : <Text>no data found</Text>
          }
        </Content>
        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={()=>{
            // this.props.insert({
            //   title: 'title test',
            //   contents: 'contents test'
            // })
            this.props.navigation.navigate('AddMainComponent')
          }}>
          <Icon name="md-add" />
        </Fab>
        {/* <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={()=>{
              this.props.insert({
                title: 'title test',
                contents: 'contents test'
              })
          }}>
          <Icon name="md-add" />
          <NativeButton 
            style={{ backgroundColor: '#34A34F' }}
            >
            <Icon name="md-add" />
          </NativeButton>
          <NativeButton 
            style={{ backgroundColor: '#3B5998' }} 
            onPress={()=>this.props.remove({})}>
            <Icon name="md-remove" />
          </NativeButton>
          <NativeButton disabled style={{ backgroundColor: '#DD5144' }}>
            <Icon name="mail" />
          </NativeButton>
        </Fab> */}
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


// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
  return {
      mainList: state.dataReducer.mainList
  }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(MainList);