import React from 'react';
import {Text,View,TextInput,DrawerLayoutAndroid,StyleSheet,TouchableOpacity,Alert} from 'react-native';

import Sidebar from "./../components/Sidebar";
import Toolbar from "./../components/Toolbar";

class LoginComponent extends React.Component{
     
     state={
         email:'',
         password:''
     }
     handleEmail= (text) =>{
         this.setState({email:text})
     }
     handlePassword = (text) =>{
         this.setState({password:text})
     }

     login= (email,password) =>{
         Alert.alert('entered Email :'+email+ '\n Password is :'+password);
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
                <Toolbar openDrawer={this.openDrawer} toolbarName="Login"/>
                <Text style={styles.headerTitle}>  Login Component </Text>

                <View>
                    <TextInput style={styles.input}
                     placeholder="Email"
                     placeholderTextColor="green"
                     onChangeText={this.handleEmail}
                     underlineColorAndroid="transparent"
                     autoCapitalize="none"
                     />
                    <TextInput style={styles.input} 
                     placeholder="Password"
                     placeholderTextColor="green"
                     onChangeText={this.handlePassword}
                     underlineColorAndroid="transparent"
                     autoCapitalize="none"
                     secureTextEntry={true} />
                    <TouchableOpacity style={styles.submitButton}
                      onPress={()=>this.login(this.state.email,this.state.password)}>
                       <Text style={styles.submitText}>Submit</Text>
                    </TouchableOpacity>
                </View>
                    
            </DrawerLayoutAndroid>

        )
    }
}

export default LoginComponent;

const styles=StyleSheet.create({
  input:{
      margin:15,
      height:40,
      borderColor:'blue',
      borderWidth:2,
      borderRadius:12
  },
  submitButton:{
      backgroundColor:'#582',
      padding:10,
      margin:15,
      height:40,
      borderRadius:10,
     
  },
  submitText:{
      color:'white',
      textAlign:'center'

  },
  headerTitle:{
      fontSize:20,
      color:'green',
      textAlign:'center'
  }
})