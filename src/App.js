import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Header from './components/Header.js';
import Post from './components/Post.js';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Header />
        <Post image={require('../assets/imgs/fence.jpg')} />
      </SafeAreaView>
    );
  }
}
