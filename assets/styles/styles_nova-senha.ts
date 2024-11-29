import { StyleSheet } from "react-native";
 
const styles = StyleSheet.create({
    container:{
       // flex:1,
        padding:0,
        alignItems: 'center',
        backgroundColor:'#fff',
    },
    image:{
        flex:1,
        width:1000,
        height:1000,
        justifyContent:'center',
        
    },
    logo_topo:{
        marginRight:300,
        marginTop:50,
        width:90,
        height:90,
    },
    container_nova_Senha:{
        width:300,
        height:300,
        marginTop:100,
        backgroundColor:'#ccc',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        },
    text_nova_Senha:{
        width: '80%',
        marginLeft:0,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
    },
    nova_Senha:{
        width:'80%',
        marginTop:10,
        backgroundColor:'#fff',
        borderRadius: 7
    },
    botao_nova_Senha:{
        padding:7,
        borderRadius:5,
        marginTop:15,
        backgroundColor:'#fff'
    }
});
 
export default styles;
 