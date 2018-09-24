import React,{Component} from "react";
import {Text,View,ScrollView, Image,Dimensions,StyleSheet,DrawerLayoutAndroid} from "react-native";
import Logo from './../assets/image.jpeg';
import styles from "../styles/styles";
import Sidebar from "./../components/Sidebar";
import Toolbar from "./../components/Toolbar";

class BasicComponents extends Component{
    
    openDrawer = () => {
        this.drawer.openDrawer();
    }

   render(){
       let pic={
           uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
       }
       const navigationView = (<Sidebar/>);
       return(
        <DrawerLayoutAndroid
          id="drwaer"
           drawerWidth={300}
           ref={node => this.drawer = node}
           drawerPosition={DrawerLayoutAndroid.positions.Left}
           renderNavigationView={() => navigationView}>
           <View  style={styles.homeContainer}>
                <Toolbar openDrawer={this.openDrawer} toolbarName="Basic components"/>
                <ScrollView >
                        
                    <View style={{alignItems:"center"}}>
                            <Text> Text View </Text>
                            <Greetings name="This Text displayed Using props"/>
                            
                    </View>
                    <View>
                            <Text>Image using URI</Text>
                            <Image source={pic} style={{width:Dimensions.get('window').width,height:150}}/>
                            <Text>Image from internal files</Text>
                            <Image source={Logo} style={{width:Dimensions.get('window').width,height:150}}/>
                    </View>
                    <View>
                        <Blink passText="This text is from another componet using setInterval" />
                    </View>
                    <View>
                        <Text style={{color:"blue",fontSize:20}}> Text using Inline Style</Text>
                        <Text style={styles.textName}>Text using external style</Text>
                        <Text style={Internalstyles.textStyle} >Text using internal Style</Text>
                    </View>
                    <View style={{alignItems:"center"}}>
                        <View style={{width:50,height:50, backgroundColor:"powderblue"}}/>
                        <View style={{width:100,height:100,backgroundColor:"steelblue"}}/>
                        <View  style={{width:150,height:150, backgroundColor:"skyblue"}}/>
                    </View>
                    <View style={{flex:1}}>
                        <View style={{flex:1, backgroundColor:'red'}}/>
                        <View style={{flex:2, backgroundColor:'orange'}}/>
                        <View style={{flex:3,backgroundColor:'pink'}}/>
                    </View>
                </ScrollView>
           </View>
                   
        </DrawerLayoutAndroid>
          
       )
   }
}

export default BasicComponents;

class Greetings extends Component{
    render(){
        return(
            <View>
                <Text>{this.props.name}</Text>
            </View>
        )
    }
}

class Blink extends Component{
constructor(props){
    super(props);
    this.state={
        isTextShowing:true
    }

    setInterval(()=>{
        this.setState(previousState=>{
            return { isTextShowing:!previousState.isTextShowing };
        });
    },600)
}

    render(){
        let displayText =this.state.isTextShowing? this.props.passText:' ';
        return(
            <Text style={Internalstyles.textInterval}>{displayText}</Text>
        )
    }
}

const Internalstyles = StyleSheet.create({
    textStyle: {
      color:'blue',
      backgroundColor: '#fff',
      fontSize:20
    },
    textInterval:{
        fontSize:16,
        color:'green',
        backgroundColor:'#FFC'
    }
  });