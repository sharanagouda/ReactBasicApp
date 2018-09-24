import React from 'react';
import {Text, View, TouchableNativeFeedback,Image, ScrollView} from 'react-native';

import styles from "./../styles/styles";
import { Actions } from 'react-native-router-flux';

class Sidebar extends React.Component {


    openBasicComponentScreen = () =>{
     Actions.basiccomponents();
    }
    openFlexComponent = () =>{
        Actions.flexComponent();
    }
    openFlatList =() =>{
        Actions.flatlistcomponent();
    }
    openSectionListComponenet =()=>{
        Actions.sectionlistcomponent();
    }
    openFetchAPIScreen=()=>{
        Actions.fetchApiComonent();
    }
    openListComponentscreen=()=>{
        Actions.listComponent();
    }
    openLoginComponentScreen = () =>{
        Actions.loginComponent();
    }
    openScrollviewComponentScreen =() =>{
        Actions.scrollviewComponent();
    }
    openHomeScreen=()=>{
        Actions.home();
    }
    openNewsScreen=()=>{
        Actions.newsComponent();
    }
    openNewsHomeScreen= () =>{
        Actions.news();
    }
    openToggleComponentScreen=()=>{
        Actions.toggleSceen();
    }
    openCameracomponentScreen=()=>{
        Actions.cameraComponent();
    }
    openSocialComponentScreen=()=>{
        const newValue='yellow'
        const  textStyles= {
            color: '#fff',
            fontSize: 22,
            fontWeight: '900',
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 5,
            paddingBottom: 5
           }
        Actions.socialLogincomponent({newColor:textStyles});
    }

    openButtonComponent=()=>{
        Actions.buttonComponent();
    }
    
  render() {

    return (
      <ScrollView style={styles.sidebarContainer}>
          <TouchableNativeFeedback onPress={ this.openBasicComponentScreen}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../assets/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>Basic Components</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={ this.openButtonComponent}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../assets/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>Button Components</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={ this.openCameracomponentScreen}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../assets/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>Camera</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={this.openFlexComponent}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../assets/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>Flex Example</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={ this.openToggleComponentScreen}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../assets/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>Toggle Component</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={this.openScrollviewComponentScreen}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../assets/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>ScrollView</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={this.openFlatList}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../assets/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>FlatList</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={this.openSectionListComponenet}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../assets/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>Section List</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={this.openListComponentscreen}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../assets/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>List Component</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={this.openFetchAPIScreen}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../assets/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>Fetch API </Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={this.openLoginComponentScreen}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../assets/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>Login Screen</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={this.openSocialComponentScreen}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../assets/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>Social Login Screen</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={this.openNewsHomeScreen}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../assets/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>News Home</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={this.openNewsScreen}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../assets/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>News</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={this.openHomeScreen}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../assets/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>Home</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
      </ScrollView>
    );
  }
}

export default Sidebar;
