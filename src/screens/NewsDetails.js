import React,{Component} from 'react';
import {View,Text, WebView,DrawerLayoutAndroid} from 'react-native';
import Sidebar from "./../components/Sidebar";
import Toolbar from "./../components/Toolbar";

class NewsDetailComponent extends Component{

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
                <Toolbar openDrawer={this.openDrawer} toolbarName="News Detail"/>
                    <WebView
                    source={{uri: this.props.newUrl}} 
                />
           </DrawerLayoutAndroid>
        )
    }
}

export default NewsDetailComponent;
