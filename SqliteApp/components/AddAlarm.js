import React, { Component } from 'react';
import { View, Text, StyleSheet, BackHandler } from 'react-native';
import CircleButton from './CircleButton';
import Database from "./Database";

export default class AddAlarm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: "00",
            minute: "00",
            on: "false"
        };
    }

    handleCallback = () => {
        Database.add(this.state.hour, this.state.minute, this.state.on, "")
    }

    handleBackPress = () => {
        this.props.route.params.refresh();
        // this.props.navigation.goBack();
    }

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> "+" adds an alarm for {this.state.hour}:{this.state.minute} </Text>
                <View style={styles.buttonContainer}>
                    <CircleButton
                        size={100}
                        function="add"
                        parentCallback={this.handleCallback}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1A1F22",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        position: "absolute",
        bottom: 0
    },
    text: {
        color: "#FFFFFF",
        fontSize: 50,
        fontWeight: "300"
    }
});