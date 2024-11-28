import React, { Component} from "react";
import { SafeAreaView, View, Text, Button, TouchableOpacity, Image, TextInput, ImageBackground, } from "react-native";
import styles from "./assets/styles/styles_Tela_Zero";

class App extends Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('./assets/images/Group 1.png')} resizeMode="cover" style={styles.image}/>
               <View style={styles.header}>
                <Image
                    source={require('./assets/images/logo 1.png')}
                    style={styles.logo}
                    />
                <TouchableOpacity style={styles.botao}>
                    <Text>Entrar</Text>
                </TouchableOpacity>
               </View>
               <View style={styles.bloco1}>
                    <Text style={styles.text1}>Filmes, Séries e muito mais, sem limites</Text>
                    <Text style={styles.text}>Assista onde quiser. Cancele quando quiser.</Text>
                    <Text style={styles.text}>Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</Text>
                    <TextInput
                        placeholder='Digite Seu Email...'
                        style={styles.input_email}
                    />
                    <TouchableOpacity style={styles.botao_cadastrar}>
                        <Text>Cadastrar</Text>
                    </TouchableOpacity>
               </View>
               <View style={styles.bloco2}>
                    <Text style={styles.text1}>Assista na sua TV!</Text>
                    <Text style={styles.text}>Aproveite a tela grande da tv com</Text>
                    <Text style={styles.text}>seus amigos e familia</Text>
               </View>
               <View style={styles.bloco3}>
                    <Text style={styles.text1}>Assista onde quiser</Text>
                    <Text style={styles.text}>Aproveite no tablet, laptp, celular</Text>
                    <Text style={styles.text}>e outros aparelhos</Text>
               </View>
               <View style={styles.bloco2}>
                    <Text style={styles.text1}>Baixe séries para assistir</Text>
                    <Text style={styles.text1}>Offline</Text>
                    <Text style={styles.text}>Assista no seu carro, trem</Text>
                    <Text style={styles.text}>ou até foguete!</Text>
               </View>
            </SafeAreaView>
        );
    }
}

export default App;