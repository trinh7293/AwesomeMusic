import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';

// import * as firebase from 'firebase'
import firebase from 'react-native-firebase';

import Router from './routes/Router'
import RouteNames from './routes/RouteNames'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'aneo@gmail.com',
            password: '123456'
        }
        // firebase.initializeApp({
        //     apiKey: "AIzaSyAJbGDCeYKIGhrzcaALcDb-e07EDx1Bi4M",
        //     authDomain: "awesomemusic-32daa.firebaseapp.com",
        //     databaseURL: "https://awesomemusic-32daa.firebaseio.com",
        //     storageBucket: "awesomemusic-32daa.appspot.com",
        // });
    }

    onClickLogin = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password);
            console.log("Logged In!");
            setTimeout(() => {
                Router.reset(RouteNames.Main)
            }, 1500);
        } catch (error) {
            console.log('error======',error)
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='username'
                    value={this.state.username}
                    onChangeText={value => {
                        this.setState({
                            username: value
                        })
                    }}
                />
                <TextInput
                    placeholder='password'
                    value={this.state.password}
                    onChangeText={value => {
                        this.setState({
                            password: value
                        })
                    }}
                />
                <Button
                    onPress={this.onClickLogin}
                    title='Login'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Login;