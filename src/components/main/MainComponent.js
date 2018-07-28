import React, { Component } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import {
  Header,
  Title,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right
} from "native-base";

// const logo = require("../../../assets/logo.png");
// const cardImage = require("../../../assets/drawer-cover.png");

class MainComponent extends Component {
  render() {
    return (
      <Card style={styles.mb}>
        <TouchableOpacity onPress={this.props.clickAction}>
          <CardItem>
            <Left>
              <Body>
                <Text>NativeBase</Text>
                <Text note>GeekyAnts</Text>
              </Body>
            </Left>
          </CardItem>
        </TouchableOpacity>

        <CardItem cardBody>
          <Image
            style={{
              resizeMode: "cover",
              width: null,
              height: 200,
              flex: 1
            }}
          // source={cardImage}
          />
        </CardItem>

        <CardItem style={{ paddingVertical: 0 }}>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>4923 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>89 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
const styles = StyleSheet.create({

  text: {
    alignSelf: "center",
    marginBottom: 7
  },
  mb: {
    marginBottom: 15
  }
});

export default MainComponent;

