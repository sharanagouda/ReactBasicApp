import React from 'react';
import {Text,View,DrawerLayoutAndroid,TouchableOpacity,TextInput,StyleSheet,AsyncStorage} from 'react-native';
import Sidebar from "./../components/Sidebar";
import Toolbar from "./../components/Toolbar";
import Styles from "./../styles/styles";

class SocialLoginComponent extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            colorOfText:'red',
            checked:false.contain,
            'name': ''
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('name').then((value) =>{ this.setState({ 'name': value })})
        setName = (value)=> {
            AsyncStorage.setItem('name', value);
            this.setState({ 'name': value });
            }
     }

    openDrawer = () => {
        this.drawer.openDrawer();
    }
     textStyles= {
         color: '#fff',
         fontSize: 22,
         fontWeight: '900',
         paddingLeft: 20,
         paddingRight: 20,
         paddingTop: 5,
         paddingBottom: 5
        }
    render(){
        const navigationView = (<Sidebar/>);
        return(
            <DrawerLayoutAndroid
            id="drwaer"
               drawerWidth={300}
               ref={node => this.drawer = node}
               drawerPosition={DrawerLayoutAndroid.positions.Left}
               renderNavigationView={() => navigationView}>
                <Toolbar openDrawer={this.openDrawer} toolbarName="Social Login"/>
            

                <View>
                <Text style={[this.props.newColor,{color:'red',color:'green'}]}> Social Login Component </Text>
                </View>
                <Text style={[(this.state.checked) ? {color:'red'} : {color:'blue'}]}>Hi How are you</Text>
                <Text style={[(this.state.checked) ? {color:'blue'} : {color:'yellow'}]}>hellow world</Text>

                       <View style = {InternalStyle.container}>
                            <TextInput style = {InternalStyle.textInput} autoCapitalize = 'none' 
                            onChangeText = {this.setName}/>
                            <Text>
                            {this.state.name}
                            </Text>
                        </View>
            </DrawerLayoutAndroid>

        )
    }
}

export default SocialLoginComponent;

const InternalStyle=StyleSheet.create({
    internalText:{
        color:'green'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
     },
     boldText: {
        fontSize: 25,
        color: 'yellow',
     },
     textInput: {
        margin: 15,
        height: 35,
        borderWidth: 1,
        backgroundColor: '#7816ed'
     }
})
