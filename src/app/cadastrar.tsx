import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Text, View, Image, ImageBackground } from 'react-native';
import styles from '../../assets/styles/styles_cadastrar';
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
          <View style={styles.container_cadastrar}>
            <View style={styles.text_cadastrar}>
              <Text>Cadastrar</Text>
            </View>
            <View style={styles.nome_cadastrar}>
              <TextInput
                  placeholder='Digite seu Nome Completo'
              />
            </View>
            <View style={styles.email_cadastrar}>
              <TextInput
                placeholder='Digite Seu Email...'
              />
            </View>
           
            <View style={styles.senha_cadastrar}>
              <TextInput
                  placeholder='Digite sua senha...'
              />
            </View>
            <View style={styles.senha_cadastrar}>
              <TextInput
                  placeholder='Confirmar sua senha...'
              />
            </View>
            <Link href="/Login" asChild>
              <TouchableOpacity style={styles.botao_cadastrar}>
                  <Text>Cadastrar</Text>
              </TouchableOpacity>
            </Link>
        </View>
      </SafeAreaView>
    );
  }
}

export default App;


