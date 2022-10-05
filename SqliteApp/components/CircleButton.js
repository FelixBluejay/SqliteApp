import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import add from "../assets/icon-add.png";

class CircleButton extends Component {
    constructor(props) {
        super(props);
        
    }
    
    onPress = () => {
        this.props.parentCallback();
    };

    render() {
        return (
            <TouchableOpacity style={{
                margin: 15,
                backgroundColor: "#52002e",
                opacity: 0.9,
                alignItems: "center",
                justifyContent: "center",
                width: this.props.size,
                height: this.props.size,
                borderRadius: this.props.size / 2,
            }}
                onPress={this.onPress}>
                    
                <Image source={add} style={{
                    width: "70%",
                    height: "70%"
                }}/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
})

export default CircleButton;