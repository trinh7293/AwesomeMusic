import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';
import firebase from 'react-native-firebase'

class AllSongsScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songName: ''
        }
    }

    componentDidMount() {
        this.props.getSongsIfNeeded()
    }

    _keyExtractor = (item, index) => item.id;

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.songs.items}
                    keyExtractor={this._keyExtractor}
                    renderItem={({ item }) => <Text>{item}</Text>}
                />
                <TextInput
                    placeholder='song name'
                    value={this.state.songName}
                    onChangeText={value => {
                        this.setState({
                            songName: value
                        })
                    }}
                />
                <Button
                    title='Add'
                    onPress={() => {
                        firebase.firestore().collection('songList').add({
                            song: this.state.songName,
                        })
                        this.setState({
                            songName: ''
                        })
                    }}
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