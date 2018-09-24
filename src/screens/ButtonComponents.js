import React from 'react';
import {View,Text,Button,StyleSheet,DrawerLayoutAndroid,Alert,TouchableOpacity,TouchableHighlight,TouchableNativeFeedback,TouchableWithoutFeedback} from 'react-native';
import Sidebar from "./../components/Sidebar";
import Toolbar from "./../components/Toolbar";

class ButtonComponent extends React.Component{
           handlePress=false;


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
                <Toolbar openDrawer={this.openDrawer} toolbarName="Buttons"/>
            
                <View style={styles.container}>
                    <Button   onPress={()=> Alert.alert("OMG you pressed a button!!")} color='green' style={styles.buttonStyle} title="Press Me"/>
                    <Text>Using Touchable Opacity</Text>
                    <TouchableOpacity>
                        <Text style = {styles.text}>
                          Text as a Button
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                           <Button   onPress={()=> Alert.alert("you pressed a button!!")} color='blue' style={styles.buttonStyle} title="Press Me"/>
                    </TouchableOpacity>
                    <Text>Using Touchable Highlight</Text>
                    <TouchableHighlight>
                        <Text style = {styles.text}>
                        Button
                        </Text>
                    </TouchableHighlight>
                    <Text>Using Touchable Highlight</Text>
                    <TouchableNativeFeedback>
                        <Text style = {styles.text}>
                        Button
                        </Text>
                   </TouchableNativeFeedback>
                   <Text>Using Touchable Without Feedback</Text>
                   <TouchableWithoutFeedback>
                        <Text style = {styles.text}>
                            Button
                        </Text>
                    </TouchableWithoutFeedback>
                    <View style={[{ width: "70%", margin: 10 }]}>
                    <Button
                        onPress={()=> Alert.alert("you pressed a button!!")}
                        title="Button Three"
                        color="#FF3D00"
                    />
                    </View>
                  
                 <View style={[{ width: "50%", height:"20%", margin: 10,borderRadius:52 }]}>
                    <Button
                        onPress={()=> Alert.alert("you pressed a button!!")}
                        title="Button now"
                        color="#FA3D00"
                    />
                    </View>
                </View>
                 

                    
            </DrawerLayoutAndroid>
        )
    }
}

export default ButtonComponent;

const styles=StyleSheet.create({
   container:{
       marginTop:15,
     
   },
   text: {
    borderWidth: 1,
    padding: 20,
    borderColor: 'black',
    backgroundColor: 'skyblue',
    textAlign: 'center'
 }
})