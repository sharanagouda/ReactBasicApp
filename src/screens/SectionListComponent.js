import React,{Component} from 'react';
import {Text,View,StyleSheet,DrawerLayoutAndroid,SectionList } from 'react-native'
import styles from '../styles/styles';

import Sidebar from "./../components/Sidebar";
import Toolbar from "./../components/Toolbar";

class SectionListComponent extends Component{

    
    openDrawer = () => {
        this.drawer.openDrawer();
    }
    
    render(){
        const navigationView = (<Sidebar logoutUser={this.logoutRequest} />);
        return(
         <DrawerLayoutAndroid
           id="drwaer"
            drawerWidth={300}
            ref={node => this.drawer = node}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView}>
            <Toolbar openDrawer={this.openDrawer} toolbarName="SectionList"/>
            <View style={styleOne.container}>
              <SectionList 
              sections={[
                  {title:'A', data:['Arun','Abhi']},
                  {title:'M',data:['Madu']},
                  {title:'S', data:['Sharana' ,'Sharankar']},
                  {title:'K', data:['Kallayya']},
                  {title:'M',data:['Madu']},
                  {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                ]}
                renderItem={({item}) => <Text style={styleOne.item}>{item}</Text>}
                renderSectionHeader={({section}) => <Text style={styleOne.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
              />
            </View>
        </DrawerLayoutAndroid>
        )
    }
}

const styleOne = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })
  

export default SectionListComponent;


