import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

class AllSongsScreen extends Component {

    componentDidMount() {
        this.props.getSongsIfNeeded()
    }

    _keyExtractor = (item, index) => item.id;

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data = {this.props.songs.items}
                    keyExtractor={this._keyExtractor}
                    renderItem = {({item}) => <Text>{item}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemContainer: {
        flexDirection: 'row',
    }
})

export default AllSongsScreen;