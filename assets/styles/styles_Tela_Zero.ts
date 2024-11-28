import { StyleSheet } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    header:{
        justifyContent:'space-between',
    },
    logo:{
        width:90,
        height:90,
        marginTop:50,
        
    },
    botao:{
        width:100,
        height:50,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        marginLeft:300,
        position:'relative',
        bottom:80,
    },
    bloco1:{
        justifyContent:'center',
        marginLeft:'auto',
        marginRight:'auto',
    },
    input_email:{
        width:280,
        marginTop:20,
        backgroundColor:'#fff',
        borderRadius: 7
    },
    botao_cadastrar:{
        width:100,
        height:40,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        marginLeft:300,
        position:'relative',
        bottom:41,
    },
    bloco2:{
        width:'100%',
        height:170,
        backgroundColor:'#11111E',
        justifyContent:'center',
    },
    bloco3:{
        width:'100%',
        height:170,
        justifyContent:'center',
        backgroundColor:'#161626',
        alignItems:"flex-end"
    },
    text:{
        color:'#fff'
    },
    image:{
        flex:1,
        width:1000,
        height:1000,
        justifyContent:'center',
    },
    text1:{
        fontSize:20,
         color:'#fff'
    }
});

export default styles;