import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';
import {connect} from 'react-redux';

import {fetchPosts} from '../store/reducers/posts';

class Feed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          data={this.props.posts}
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

const mapStateToProps = ({posts}) => {
  return {
    posts: posts.posts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
