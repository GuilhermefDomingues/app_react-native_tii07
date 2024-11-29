import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Text, View, Image, ImageBackground } from 'react-native';
import styles from '../../assets/styles/styles_nova-senha';
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
          <View style={styles.container_nova_Senha}>
            <View style={styles.text_nova_Senha}>
              <Text>Cadastrar Nova Senha</Text>
            </View>
            <View style={styles.nova_Senha}>
              <TextInput
                placeholder='Nova Senha'
              />
            </View>
           
            <View style={styles.nova_Senha}>
              <TextInput
                  placeholder='Confirmar Nova senha...'
              />
            </View>
            <TouchableOpacity style={styles.botao_nova_Senha}>
                <Text>Cadastrar</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default App;


