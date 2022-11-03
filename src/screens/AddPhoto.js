import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {connect} from 'react-redux';

import {addPost} from '../store/actions/posts';

const noUser = 'Você precisa estar logado para adicionar imagens';

class AddPhoto extends Component {
  state = {
    image: {},
    comment: '',
  };

  pickImage = () => {
    if (!this.props.name) {
      Alert.alert('Falha', noUser);
      return;
    }

    launchImageLibrary(
      {
        title: 'Escolha a imagem',
        mediaType: 'photo',
        maxWidth: (Dimensions.get('window').width * 3) / 3,
        maxHeight: 400,
        saveToPhotos: true,
        includeBase64: false,
      },
      res => {
        if (res.assets) {
          this.setState({
            image: res.assets[0]  ,
          });
        }
      },
    );
  };

  save = async () => {
    if (!this.props.name) {
      Alert.alert('Falha', noUser);
      return;
    }

    this.props.onAddPost({
      id: Math.random(),
      nickname: this.props.name,
      email: this.props.email,
      image: this.state.image,
      comments: [
        {
          nickname: this.props.name,
          comment: this.state.comment,
        },
      ],
    });
    this.setState({image: null, comment: null});
    this.props.navigation.navigate('Feed');
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Compartilhe uma imagem</Text>
          <View style={styles.imageContainer}>
            <Image source={this.state.image} />
          </View>
          <TouchableOpacity onPress={this.pickImage} style={styles.button}>
            <Text>Escolha a foto</Text>
          </TouchableOpacity>
          <TextInput
            placeholder="Algum comentário para a foto?"
            style={styles.input}
            value={this.state.comment}
            onChangeText={comment => this.setState({comment})}
            editable={this.props.name != null}
          />
          <TouchableOpacity onPress={this.save} style={styles.button}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: Platform.OS === 'ios' ? 30 : 10,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '90%',
    height: (Dimensions.get('window').width * 3) / 4,
    backgroundColor: '#EEE',
    marginTop: 10,
  },
  image: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').width * 3) / 4,
    resizeMode: 'center',
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286F4',
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF',
  },
  input: {
    marginTop: 20,
    width: '90%',
  },
});

const mapStateToProps = ({user}) => {
  return {
    email: user.email,
    name: user.name,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: post => dispatch(addPost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto);
