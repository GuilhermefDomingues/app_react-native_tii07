import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Text, View, Image, ImageBackground } from 'react-native';
import styles from '../../assets/styles/styles_Recuperar';
import { Link } from "expo-router";

class App extends Component{
  render(){
    return(
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../../assets/images/fundo 1.jpg')} resizeMode="cover" style={styles.image}/>
        <View>
            <Image
              source={require('../../assets/images/logo 1.png')}
              style={styles.logo_topo}
            />
        </View>
          <View style={styles.container_recuperar}>
            <View>
              <Text>Recuperar Senha</Text>
            </View>
            <View style={styles.email_recuperar}>
              <TextInput
                placeholder='Digite Seu Email...'
              />
            </View>
            <Link href="/nova_senha" asChild>
              <TouchableOpacity style={styles.botao_recuperar}>
                  <Text>Recuperar</Text>
              </TouchableOpacity>
            </Link>
        </View>
      </SafeAreaView>
    );
  }
}

export default App;

