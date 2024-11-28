import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Text, View, Image, ImageBackground } from 'react-native';
import styles from './assets/styles/styles_Login';


class App extends Component{
  render(){
    return(
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('./assets/images/fundo 1.jpg')} resizeMode="cover" style={styles.image}/>
        <View>
            <Image
              source={require('./assets/images/logo 1.png')}
              style={styles.logo_topo}
            />
        </View>
          <View style={styles.container_login}>
            <View style={styles.text_login}>
              <Text>Login</Text>
            </View>
            <View style={styles.email_login}>
              <TextInput
                placeholder='Digite Seu Email...'
              />
            </View>
            <View style={styles.text_login}>
              <Text>Senha</Text>
            </View>
            <View style={styles.senha_login}>
              <TextInput
                  placeholder='Digite sua senha...'
              />
            </View>
            <TouchableOpacity style={styles.botao_login}>
                <Text>Entrar</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default App;

