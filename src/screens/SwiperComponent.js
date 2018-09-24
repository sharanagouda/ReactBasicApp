import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Button
} from 'react-native';
import{Actions} from 'react-native-router-flux';
import Swiper from 'react-native-swiper';

 class SwiperComponent extends Component{


    openHomeScreen=()=>{
        Actions.home();
    }
    render() {
      return (
                <Swiper style={styles.wrapper}>
                    <View style={styles.slide1}>
                        <View style={styles.containerOne}>
                        <Text style={styles.text}> Swiper slide One</Text>
                        </View>
                        <View style={styles.ContainerTwo}>
                                <TouchableNativeFeedback>
                                        <Button  onPress={this.openHomeScreen} title="Skip"></Button>
                            </TouchableNativeFeedback>
                        </View>
                        </View>
                        <View style={styles.slide2}>
                            <Text style={styles.text}>Swiper Slide Two</Text>
                        </View>
                        <View style={styles.slide3}>
                        <Text style={styles.text}>Swiper Slide Three</Text>
                   </View>
                </Swiper>
       
      )
    }
  }
export default SwiperComponent
  

var styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent:'center',
      backgroundColor: '#9AA6EB',
    },
    containerOne:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    ContainerTwo:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#98BAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92FFD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
  })
   