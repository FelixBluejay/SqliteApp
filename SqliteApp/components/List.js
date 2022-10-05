import React, { Component } from 'react';
import { View, FlatList, StyleSheet, LogBox } from 'react-native';
import ListItem from './ListItem';
import CircleButton from './CircleButton';
import Database from "./Database";

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alarms: []
        };
    }

    componentDidMount() {
        Database.createTable();
        this.loadData();
    }

    loadData = () => {
        Database.getAll().then((all) => {
            let allData = JSON.parse(all);
            let alarms = allData.rows._array;
            this.setState({
                alarms: alarms
            });

            // console.log("===============================")
            // console.log(this.state.alarms)
        })
    }

    handleCallback = () => {
        this.props.navigation.navigate("AddAlarm", {refresh: this.loadData});
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.listContainer}>
                    <FlatList
                        data={this.state.alarms}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <ListItem parentRefresh={this.loadData} hour={item.hour} minute={item.minute} days={item.days} selected={item.selected} id={item.id}/>}
                    />
                    <View style={styles.buttonContainer}>
                        <CircleButton
                            size={100}
                            parentCallback={this.handleCallback}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1A1F22",
    },
    buttonContainer: {
        flexDirection: "row",
        position: "absolute",
        bottom: 0
    },
    listContainer: {
        flex: 5,
        justifyContent: "center",
        alignItems: "center"
    }
});

