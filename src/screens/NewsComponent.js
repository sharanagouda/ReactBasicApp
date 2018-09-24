import React,{Component} from 'react';
import {View,Text,DrawerLayoutAndroid,ScrollView,TouchableOpacity,StyleSheet,Image} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage,ActivityIndicator } from 'react-native-cards';
import Grid from 'react-native-grid-component';
import {Actions} from 'react-native-router-flux';
import Sidebar from "./../components/Sidebar";
import Toolbar from "./../components/Toolbar";

class NewsHomeComponent extends Component{
     
    constructor(props){
        super(props)
        this.state={
            newsPapers:[ 
            {'content': 'Google News (India)', 'id': 1,'logo':'./../assets/googlenews.png'},
            {'content': 'The Hindu', 'id': 2,'logo':'./../assets/googlenews.png'},
            {'content': 'Times Now', 'id': 3},
            {'content': 'The times of India', 'id': 4,'logo':'./../assets/googlenews.png'},
            {'content': 'News 24', 'id': 5,'logo':'./../assets/googlenews.png'},
            {'content': 'Google News', 'id': 6,'logo':'./../assets/googlenews.png'},
            {'content': 'Fox Sports', 'id': 7,'logo':'./../assets/googlenews.png'},
            {'content': 'ESPN', 'id': 8,'logo':'./../assets/googlenews.png'},
            {'content': 'Entertainment ', 'id': 9,'logo':'./../assets/googlenews.png'},
            {'content': 'The Economist', 'id': 10,'logo':'./../assets/googlenews.png'},
            {'content': 'TechRadar', 'id': 11,'logo':'./../assets/googlenews.png'},
            {'content': 'Hacker News', 'id': 12,'logo':'./../assets/googlenews.png'},
            {'content': 'Business Insider', 'id': 13,'logo':'./../assets/googlenews.png'},
            {'content': 'The Next Web', 'id':14,'logo':'./../assets/googlenews.png'}
          ],
         
        }
    }
    _openNews(newsContent){
        Actions.newsComponent({newsContent: newsContent});
    }
    openDrawer = () => {
        this.drawer.openDrawer();
    }
    _renderItem = (data, i) => (
        <View style={styles.item} key={i} >
            <View style={styles.item}>
                <Image source={data.logo} style={{width:30,height:30}}/>
                <TouchableOpacity onPress={() => this._openNews(data.content)}>
                   <Text style={styles.gridText}>{data.content}</Text> 
                </TouchableOpacity>
            </View>        
        </View>
      );
     
      _renderPlaceholder = i => <View style={styles.item} key={i} />
    render(){
        const navigationView = (<Sidebar/>);
        return(

            <DrawerLayoutAndroid
            id="drwaer"
               drawerWidth={300}
               ref={node => this.drawer = node}
               drawerPosition={DrawerLayoutAndroid.positions.Left}
               renderNavigationView={() => navigationView}>
                <Toolbar openDrawer={this.openDrawer} toolbarName="News Home"/>
                    
                        <Grid
                            style={styles.list}
                            renderItem={this._renderItem}
                            renderPlaceholder={this._renderPlaceholder}
                            data={this.state.newsPapers}
                            itemsPerRow={2}
                        />
                    

            
            </DrawerLayoutAndroid>

        )
    }
}

export default NewsHomeComponent;

const styles=StyleSheet.create({

    container:{
         flex:1,
        flexWrap: 'wrap',
      
    },
    item: {
        flex: 1,
        height: 60,
        margin: 1,
        textAlign:'center',
        backgroundColor:'white',
        elevation:4,
        borderRadius:5,
      },
      list: {
        flex: 1
      },
      gridText:{
          textAlign:'center'
      },
      newsnow:{
          flex:1,
          flexDirection:'row'
      }
})
