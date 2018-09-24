import React,{Component} from "react";
import {Text,View,ScrollView, Image,Dimensions,StyleSheet,DrawerLayoutAndroid} from "react-native";
import Camera from 'react-native-camera';
import styles from "../styles/styles";
import Sidebar from "./../components/Sidebar";
import Toolbar from "./../components/Toolbar";

class CameraComponents extends Component{
    
    takePicture = () => {
        const options = {};
        this.camera.capture({ metadata: options })
        .then((data) => console.log(data))
        .catch(err => console.error(err));
     }
    
    openDrawer = () => {
        this.drawer.openDrawer();
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
           <View  style={Internalstyles.homeContainer}>
                {/* <Toolbar openDrawer={this.openDrawer} toolbarName="Camera"/> */}
                <Camera
                ref = {(cam)=> {
                    this.camera = cam;
                }}
                style = {Internalstyles.preview}
                aspect = {Camera.constants.Aspect.fill}>
                </Camera>
                  <Text style = {Internalstyles.capture} onPress = {this.takePicture}>CAPTURE</Text>
           </View>
                   
        </DrawerLayoutAndroid>
          
       )
   }
}

export default CameraComponents;

const Internalstyles = StyleSheet.create({
    container: {
        flex: 1,
     },
     preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
     },
     capture: {
        fontSize: 30,
        color: 'red',
        alignSelf: 'center',
     }
  });