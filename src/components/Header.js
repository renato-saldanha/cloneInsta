import React, {Component} from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {Gravatar} from 'react-native-gravatar';

import icon from '../../assets/imgs/icon.png';

class Header extends Component {
  render() {
    const name = this.props.name || 'Anônimo';
    const gravatar = this.props.email ? (
      <Gravatar
        options={{emial: this.props.email, secure: true}}
        style={styles.gravatar}
      />
    ) : null;
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Image source={icon} style={styles.image} />
          <Text style={styles.title}>Lambe Lambe</Text>
        </View>
        <View style={styles.userContainer}>
          <Text style={styles.user}>{name}</Text>
          {gravatar}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#BBB',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  title: {
    color: '#000',
    fontFamily: 'shelter',
    height: 30,
    fontSize: 28,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    fontSize: 10,
    color: '#888',
  },
  gravatar: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});

const mapStateToProps = ({user}) => {
  return {
    email: user.email,
    name: user.name,
  };
};

export default connect(mapStateToProps)(Header);
