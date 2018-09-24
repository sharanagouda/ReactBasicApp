import React from 'react';
import {Text, View,Modal,TouchableHighlight,Picker,StyleSheet,DrawerLayoutAndroid,StatusBar } from 'react-native';

import Sidebar from "./../components/Sidebar";
import Toolbar from "./../components/Toolbar";

class ToggleComponent extends React.Component{
    
    state={
        modalVisible:false,
        users:''
    }
    updateUser = (user) => {
        this.setState({ user: user })
     }

    toggleModal(visible){
        this.setState({
            modalVisible:true
        })
    }
    openDrawer = () => {
        this.drawer.openDrawer();
    }

    render(){
        const navigationView = (<Sidebar/>);
        return (
          <DrawerLayoutAndroid
            id="drwaer"
             drawerWidth={300}
             ref={node => this.drawer = node}
             drawerPosition={DrawerLayoutAndroid.positions.Left}
             renderNavigationView={() => navigationView}>
                <Toolbar openDrawer={this.openDrawer} toolbarName="Toggle"/>
                <View style={styles.container}>
                    <Modal animationType ={'slide'} transparent={false} 
                     visible={this.state.modalVisible}
                     onRequestClose={()=>{console.log('Modal has been closed')}}>
                        <View style={styles.modal}>
                            <Text style={styles.text}>
                                Modle is open 
                            </Text>
                            <TouchableHighlight onPress={()=>
                            {this.toggleModal(!this.state.modalVisible)}}>
                                <Text style={styles.text}>
                                    close modal
                                </Text>
                            </TouchableHighlight>
                        </View>
                    
                    </Modal>
                    <TouchableHighlight onPress={()=>
                    { this.toggleModal(true)}}>
                        <Text style={styles.text}>
                            Open modal
                        </Text>
                    </TouchableHighlight>
                    <View>
                        <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
                            <Picker.Item label = "Steve" value = "steve" />
                            <Picker.Item label = "Ellen" value = "ellen" />
                            <Picker.Item label = "Maria" value = "maria" />
                        </Picker>
                        <Text style = {styles.text}>{this.state.user}</Text>
                    </View>
                </View>
                <StatusBar barStyle = "light-content" hidden = {false}/>
            </DrawerLayoutAndroid>
        )
    }
}

export default ToggleComponent;
const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:'#ede3f2',
        padding:100
    },
    modal:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#f7021a',
        padding:100,
       
    },
    text:{
        fontSize: 20,
        alignItems: 'center',
        color: 'red',
        marginTop:10
    }
})