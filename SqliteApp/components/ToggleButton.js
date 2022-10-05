import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback, TouchableHighlightBase } from 'react-native';

export default class ToggleButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false
        };
    }

    toggle = () => {
        let prevState = this.state.toggled
        this.setState({
            toggled: !prevState
        })
    }

    componentDidMount = () => {
        this.setState({
            toggled: this.props.toggled
        })
    }

    render() {
        let highlight;
        if(this.state.toggled) {
            highlight = <View style={{
                borderRadius: 25,
                width: 50,
                height: 50,
                margin: 5,
                backgroundColor: "#EA1E63",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Text style={{ color: "white", fontSize: 17 }}> {this.props.day} </Text>
            </View>
        } else {
            highlight = <View style={{
                borderRadius: 25,
                width: 50,
                height: 50,
                margin: 5,
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Text style={{ color: "white", fontSize: 17 }}> {this.props.day} </Text>
            </View>
        }
        return (
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('rgba(255,255,255,1)', true)}
                onPress={() => this.toggle()}
                style={{
                    width: 50,
                    height: 50,
                }}>
                {highlight}
            </TouchableNativeFeedback>
        );
    }
}
