import React, {Component} from 'react';
import { StyleSheet, Text, View, AppRegistry, Button, Image, Alert, TouchableOpacity } from 'react-native';
import Sidebar from 'react-native-sidebar';
import { NativeRouter, Route, Link } from 'react-router-native';
import Expo from 'expo';
import {StackNavigator} from 'react-navigation';
import {ToDos} from './ToDos'
import LoginButton from './LoginButton'

const styles = require('../style');

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'TASKBUDDY',
    header: null
  }
  _onPressButton() {
    Alert.alert('You tapped the button!');
  }
  render() {
    const {navigate} = this.props.navigation;
        let pic = {
      uri: 'https://cdn2.iconfinder.com/data/icons/work-flow/512/Clipboard_List-512.png'
    };
    return (
      <View style={styles.homeContainer}>
      <Image source={pic} onPress={() => navigate('ToDos')} style={{width: 193, height: 210}}/>
        <Text>WELCOME TO TASKBUDDY!</Text>
        <Text
          onPress={() => navigate('ToDos')}
        >See Your To Do List</Text>
        <LoginButton onPress={this._onPressButton}/>
    <TouchableOpacity onPress={this._onPressButton}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </View>
    </TouchableOpacity>
      </View>
    );
  }
}
