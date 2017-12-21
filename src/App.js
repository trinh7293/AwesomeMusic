import React, { Component } from 'react';
import {  
    View,
    StyleSheet
} from 'react-native';
import VisibleAllSongs from "./containers/VisibleAllSongs";
import { BaseTheme } from '../theme/index';


const App = () => (
    <View style={styles.container}>
        <VisibleAllSongs />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: BaseTheme.statusBarMargin
    }
})

export default App