import React,{Component} from 'react';
import {Text,View,DrawerLayoutAndroid,FlatList,StyleSheet } from 'react-native'

import Sidebar from "./../components/Sidebar";
import Toolbar from "./../components/Toolbar";

class FlatlistComponent extends Component{


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
             <Toolbar openDrawer={this.openDrawer} toolbarName="Flatlist"/>
            <View style={styles.container}>
           
                    <FlatList
                    data={[
                        {key:'sharana'},
                        {key:'kallayya'},
                        {key:''},
                        {key:'Madhu'},
                        {key: 'Devin'},
                        {key:'jeny'},
                        {key:'hanmant'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                        {key:'Madhu'},
                        {key: 'Devin'},
                        {key:'jeny'},
                        {key:'hanmant'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key:'sharana'},
                        {key:'kallayya'},
                        {key:''},
                        {key:'Madhu'},
                        {key: 'Devin'},
                        {key:'jeny'},
                        {key:'hanmant'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                    />
                </View>
        </DrawerLayoutAndroid>
        )
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })

export default FlatlistComponent;


