import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Image, Switch, Animated } from 'react-native';
import more from "../assets/icon-down.png"
import trash from "../assets/icon-trash.png"
import Database from "./Database";
import ToggleButton from './ToggleButton';

class PhotoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: 1,
            expanded: false,
            selected: false,
            height: new Animated.Value(200),
        };
        this.toValue = 0;
    }

    toggle = () => {
        let prevToggle = this.state.toggled;
        let prevExpanded = this.state.expanded;
        this.setState({
            toggled: prevToggle * (-1),
            expanded: !prevExpanded
        })

        let toPos;
        if (!this.state.expanded) {
            this.toValue = 300
        } else {
            this.toValue = 200
        }

        Animated.spring(
            this.state.height,
            {
                toValue: this.toValue,
                velocity: 1,
                tension: 0,
                friction: 10,
                useNativeDriver: false
            }
        ).start();
        // this.state.expanded = !this.state.expanded;
    }

    toggleSwitch = () => {
        let next = !this.state.selected;
        this.setState({
            selected: next
        })
    }

    delete = () => {
        Database.delete(this.props.id)
        this.props.parentRefresh()
    }

    componentDidMount = () => {
        if(this.props.days) {
            let all = this.props.days.split(",")
            console.log("all")
            console.log(all)
        }
    }

    render() {
        return (
            <Animated.View
                style={[
                    styles.animatedView,
                    {
                        height: this.state.height
                    }]}
            >
                <View style={{
                    flexDirection: "column",
                    paddingTop: 20,
                    backgroundColor: "#1A1F22",
                }}>

                    {/* Row 1 */}

                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around",
                        width: "100%"
                    }}>
                        <Text style={{
                            color: "white",
                            fontSize: 50
                        }}>{this.props.hour}:{this.props.minute}</Text>
                        <Switch
                            onChange={() => this.toggleSwitch()}
                            value={this.state.selected}
                        />
                    </View>

                    {/* Row 2 */}

                    <View style={{
                        flexDirection: "row",
                        paddingTop: 20,
                        alignItems: "center",
                        justifyContent: "space-around",
                    }}>

                        {/* Delete button */}

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,1)', true)}
                            onPress={() => this.delete()}
                            style={{
                                width: 50,
                                height: 50,
                            }}
                        >
                            <View style={{ width: 50, height: 50, justifyContent: "center", alignItems: "center" }}>
                                <Image source={trash} style={{
                                    width: "70%",
                                    height: "70%",
                                }} />
                            </View>
                        </TouchableNativeFeedback>

                        {/* Show more button */}

                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple('rgba(255,255,255,1)', true)}
                            onPress={() => this.toggle()}
                            style={{
                                width: 50,
                                height: 50,
                            }}
                        >
                            <View style={{ width: 50, height: 50, justifyContent: "center", alignItems: "center" }}>
                                <Image source={more} style={{
                                    width: "70%",
                                    height: "70%",
                                    transform: [{ scaleY: this.state.toggled }]
                                }} />
                            </View>
                        </TouchableNativeFeedback>

                    </View>

                    {/* Row 3 */}

                    <View style= {{
                        flexDirection: "row",
                        marginTop: 40
                    }}>
                        <ToggleButton day="Mon"/>
                        <ToggleButton day="Tue" />
                        <ToggleButton day="Wed" />
                        <ToggleButton day="Thu" />
                        <ToggleButton day="Fri" />
                        <ToggleButton day="Sat" />
                        <ToggleButton day="Sun" />
                    </View>

                </View>

            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
})


export default PhotoItem;