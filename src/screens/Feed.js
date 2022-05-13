import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';

class Feed extends Component {
  state = {
    posts: [
      {
        id: Math.random(),
        nickname: 'Rafael Filho',
        email: 'a@gmail.com',
        image: require('../../assets/imgs/fence.jpg'),
        comments: [
          {
            nickname: 'John',
            comment: 'Stunning!',
          },
          {
            nickname: 'Ana Julia',
            comment: 'Foto linda!',
          },
        ],
      },
      {
        id: Math.random(),
        nickname: 'Renato Saldanha',
        email: 'renato.1991@gmail.com',
        image: require('../../assets/imgs/bw.jpg'),
        comments: [],
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          data={this.state.posts}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => <Post key={item.id} {...item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default Feed;
