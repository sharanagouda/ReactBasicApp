import React,{Component} from 'react'
import {Text,View,TextInput,Alert,Button,DrawerLayoutAndroid } from 'react-native'
import styles from '../styles/styles';

import Sidebar from "./../components/Sidebar";
import Toolbar from "./../components/Toolbar";

class FlexComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            EnteredText:''
        }
    }
    openDrawer = () => {
        this.drawer.openDrawer();
    }
    onClickedSubmitButton = () =>{
        Alert.alert("Omg you clicked this too")
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
            <View style={{flex:1}}>
                <Toolbar openDrawer={this.openDrawer} toolbarName="Flex"/>
                <View style={{flex:2}}>
                    <Text> flex direction row and row reverse</Text>
                    <View style={{flex:1,flexDirection:'row'}}>
                            <View style={{width:50,height:50,backgroundColor:"red"}}>
                            <Text>Hi how are you</Text>
                            </View>
                            <View style={{width:50,height:50,backgroundColor:'blue'}}/>
                            <View  style={{width:50,height:50, backgroundColor:'green'}}/>
                    </View>
                    <View style={{flex:1,flexDirection:'row-reverse'}}>
                        <View style={{width:50,height:50,backgroundColor:"red"}}/>
                        <View style={{width:50,height:50,backgroundColor:'blue'}}/>
                        <View  style={{width:50,height:50, backgroundColor:'green'}}/>
                    </View>
                    <View style={{flex:1, flexDirection:'column', marginTop:60}}>
                        <View style={{width:50,height:50, backgroundColor:'blue'}}/>
                        <View style={{width:50,height:50, backgroundColor:'red'}}/>
                        <View style={{width:50,height:50, backgroundColor:'green'}}/>
                    </View>
                </View>
                <View style={{flex:1, marginTop:40, }}> 
                    <TextInput style={{height:40, color:'blue', paddingLeft:20}} placeholder="Inter the Text" 
                    onChangeText={(EnteredText)=>this.setState({EnteredText})}/>
                    <Text style={{ fontSize:20 }}>Entered Text is : {this.state.EnteredText}</Text>
                    <Button onPress={()=> Alert.alert("OMG you pressed a button!!")} style={styles.buttonStyle} title="Press Me"/>
                </View>
        
            </View>
         </DrawerLayoutAndroid>

        )
    }
}

export default FlexComponent


