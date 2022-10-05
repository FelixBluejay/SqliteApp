import React, { Component } from 'react';
import { View, Text, Button, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native';
import MyButton from './MyButton';
import Database from "./Database";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    Database.createTable();  
  }

  handleCallback = (childData) => {
    this.props.navigation.navigate(childData)
  }


  componentDidMount() {
    // Database.createTable();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <MyButton
            route="List"
            title="Sqlite App"
            parentCallback={this.handleCallback}
            color="#FFFFFF"
            size="50"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Manage sqlite</Text>
          <Text style={styles.text}>Use animation</Text>
          <Text style={styles.text}>Use ring</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EA1E63",
    color: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  button: {
    flex: 1
  },
  textContainer: {
    flex: 1,
    alignItems: "center"
  },
});


export default Main;