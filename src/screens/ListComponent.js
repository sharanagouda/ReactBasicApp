import React from 'react';
import {View,Text,TouchableOpacity,Alert,DrawerLayoutAndroid,ScrollView} from 'react-native';
import styles from '../styles/styles';

import Sidebar from "./../components/Sidebar";
import Toolbar from "./../components/Toolbar";

class List extends React.Component{

    state={
        names:[{
            id:0,
            name:'Devid'
        },
        {
            id:1,
            name:'Barak'
        },
        {
            id:2,
            name:'john'
        },
        {
            id:3,
            name:'jothna'
        },
        {
            id:4,
            name:'prakr'
        },
        {
            id:5,
            name:'parker'
        }, 
        {
            id:6,
            name:'john'
        },
        {
            id:7,
            name:'jothna'
        },
        {
            id:8,
            name:'prakr'
        },
        {
            id:9,
            name:'parker'
        },
         {
            id:2,
            name:'john'
        },
        {
            id:3,
            name:'jothna'
        },
        {
            id:4,
            name:'prakr'
        },
        {
            id:5,
            name:'parker'
        },
         {
            id:2,
            name:'john'
        },
        {
            id:3,
            name:'jothna'
        },
        {
            id:4,
            name:'prakr'
        },
        {
            id:5,
            name:'parker'
        }
         ]
    }

    alertFunction =(item)=>{
        Alert.alert(item.name)
    }
    render(){
        return(
            <ScrollView>
                {
                    this.state.names.map((item,index)=>(
                        <TouchableOpacity
                            key={item.id}
                            style={styles.listContainer}
                            onPress={()=>this.alertFunction(item)}
                            >
                            <Text style={styles.textList}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        )
    }
}


class ListComponent extends React.Component{
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
                    <Toolbar openDrawer={this.openDrawer}/>
                    <List/>
            </DrawerLayoutAndroid>
         
        )
    }
}
export default ListComponent;