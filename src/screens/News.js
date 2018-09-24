import React from 'react';
import {Text,View,DrawerLayoutAndroid,ScrollView,StyleSheet,TouchableOpacity} from 'react-native';
import PTRView from 'react-native-pull-to-refresh';
import {Actions} from 'react-native-router-flux';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage,ActivityIndicator } from 'react-native-cards';
import Sidebar from "./../components/Sidebar";
import Toolbar from "./../components/Toolbar";

class NewsComponent extends React.Component{

    constructor(props){
        super(props)
     //  alert( this.props.newsContent)
        this.state={
            newsData:[],
            isLoading:true
        }
    }

    openDrawer = () => {
        this.drawer.openDrawer();
    }

    componentDidMount = ()=> {
      this.loadLatestNews(this.props.newsContent);
   }
   loadLatestNews=(newsContent)=>{
       if(newsContent=="Google News (India)"){
            fetch('https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=794fb53245dd45b0b2564f86257a2983', {
                method: 'GET'
            })
            .then((response)=> response.json())
            .then((responseJson)=>{
                
                this.setState({
                    isLoading:false,
                    newsData: responseJson.articles
                })
            })
            .catch((error) => {
                console.error(error);
            });
        } else if(newsContent=="Google News"){
            fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=794fb53245dd45b0b2564f86257a2983', {
                method: 'GET'
            })
            .then((response)=> response.json())
            .then((responseJson)=>{
                
                this.setState({
                    isLoading:false,
                    newsData: responseJson.articles
                })
            })
            .catch((error) => {
                console.error(error);
            });
        } else if(newsContent=="The times of India"){
            fetch('https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=794fb53245dd45b0b2564f86257a2983', {
                method: 'GET'
            })
            .then((response)=> response.json())
            .then((responseJson)=>{
                
                this.setState({
                    isLoading:false,
                    newsData: responseJson.articles
                })
            })
            .catch((error) => {
                console.error(error);
            });
        } else if(newsContent=="News 24"){
            fetch('https://newsapi.org/v2/top-headlines?sources=news24&apiKey=794fb53245dd45b0b2564f86257a2983', {
                method: 'GET'
            })
            .then((response)=> response.json())
            .then((responseJson)=>{
                
                this.setState({
                    isLoading:false,
                    newsData: responseJson.articles
                })
            })
            .catch((error) => {
                console.error(error);
            });
        }  else if(newsContent=="Fox Sports"){
            fetch('https://newsapi.org/v2/top-headlines?sources=fox-sports&apiKey=794fb53245dd45b0b2564f86257a2983', {
                method: 'GET'
            })
            .then((response)=> response.json())
            .then((responseJson)=>{
                
                this.setState({
                    isLoading:false,
                    newsData: responseJson.articles
                })
            })
            .catch((error) => {
                console.error(error);
            });
        }  else if(newsContent=="ESPN"){
            fetch('https://newsapi.org/v2/top-headlines?sources=espn&apiKey=794fb53245dd45b0b2564f86257a2983', {
                method: 'GET'
            })
            .then((response)=> response.json())
            .then((responseJson)=>{
                
                this.setState({
                    isLoading:false,
                    newsData: responseJson.articles
                })
            })
            .catch((error) => {
                console.error(error);
            });
        } else if(newsContent=="The Hindu"){
            fetch('https://newsapi.org/v2/top-headlines?sources=the-hindu&apiKey=794fb53245dd45b0b2564f86257a2983', {
                method: 'GET'
            })
            .then((response)=> response.json())
            .then((responseJson)=>{
                
                this.setState({
                    isLoading:false,
                    newsData: responseJson.articles
                })
            })
            .catch((error) => {
                console.error(error);
            });
        } else if(newsContent=="The Economist"){
            fetch('https://newsapi.org/v2/top-headlines?sources=the-economist&apiKey=794fb53245dd45b0b2564f86257a2983', {
                method: 'GET'
            })
            .then((response)=> response.json())
            .then((responseJson)=>{
                
                this.setState({
                    isLoading:false,
                    newsData: responseJson.articles
                })
            })
            .catch((error) => {
                console.error(error);
            });
        } else if(newsContent=="Entertainment"){
            fetch('https://newsapi.org/v2/top-headlines?sources=entertainment-weekly&apiKey=794fb53245dd45b0b2564f86257a2983', {
                method: 'GET'
            })
            .then((response)=> response.json())
            .then((responseJson)=>{
                
                this.setState({
                    isLoading:false,
                    newsData: responseJson.articles
                })
            })
            .catch((error) => {
                console.error(error);
            });
        } else if(newsContent=="TechRadar"){
            fetch('https://newsapi.org/v2/top-headlines?sources=techradar&apiKey=794fb53245dd45b0b2564f86257a2983', {
                method: 'GET'
            })
            .then((response)=> response.json())
            .then((responseJson)=>{
                
                this.setState({
                    isLoading:false,
                    newsData: responseJson.articles
                })
            })
            .catch((error) => {
                console.error(error);
            });
        } else if(newsContent=="Hacker News"){
            fetch('https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=794fb53245dd45b0b2564f86257a2983', {
                method: 'GET'
            })
            .then((response)=> response.json())
            .then((responseJson)=>{
                
                this.setState({
                    isLoading:false,
                    newsData: responseJson.articles
                })
            })
            .catch((error) => {
                console.error(error);
            });
        } else if(newsContent=="Times Now"){
            fetch('https://newsapi.org/v2/top-headlines?sources=time&apiKey=794fb53245dd45b0b2564f86257a2983', {
                method: 'GET'
            })
            .then((response)=> response.json())
            .then((responseJson)=>{
                
                this.setState({
                    isLoading:false,
                    newsData: responseJson.articles
                })
            })
            .catch((error) => {
                console.error(error);
            });
        } else if(newsContent=="Business Insider"){
            fetch('https://newsapi.org/v2/top-headlines?sources=business-insider&apiKey=794fb53245dd45b0b2564f86257a2983', {
                method: 'GET'
            })
            .then((response)=> response.json())
            .then((responseJson)=>{
                
                this.setState({
                    isLoading:false,
                    newsData: responseJson.articles
                })
            })
            .catch((error) => {
                console.error(error);
            });
        } else if(newsContent=="The Next Web"){
            fetch('https://newsapi.org/v2/top-headlines?sources=the-next-web&apiKey=794fb53245dd45b0b2564f86257a2983', {
                method: 'GET'
            })
            .then((response)=> response.json())
            .then((responseJson)=>{
                
                this.setState({
                    isLoading:false,
                    newsData: responseJson.articles
                })
            })
            .catch((error) => {
                console.error(error);
            });
        }
   }
   _refresh=()=>{
       return new Promise((resolve)=>{
           this.loadLatestNews();
          setTimeout(()=>{resolve()},2000) 
       });
   }
   _selectedNews = (item) =>{
                alert(item)
         // Actions.newsDetaisScreen();
   }
    render(){
        // if(this.state.isLoading){
        //    return(
        //         <View style={{flex:1,padding:20}}>
        //             <ActivityIndicator/>
        //         </View>
        //    )
        // }
        const navigationView = (<Sidebar/>);
        return(

            <DrawerLayoutAndroid
            id="drwaer"
               drawerWidth={300}
               ref={node => this.drawer = node}
               drawerPosition={DrawerLayoutAndroid.positions.Left}
               renderNavigationView={() => navigationView}>
                <Toolbar openDrawer={this.openDrawer} toolbarName={this.props.newsContent}/>
                    <PTRView onRefresh={this._refresh}>
                            <ScrollView>
                        {
                            this.state.newsData.map((item,index)=>(
                            
                            <View key={item.title}>
                             <TouchableOpacity  onPress={() => Actions.newsDetaisScreen({newUrl:item.url})}>
                                <Card pointerEvents="none">
                                    <CardImage 
                                    source={{uri: item.urlToImage}} 
                                    // title={item.title} 
                                    //onPress={this._selectedNews(item.title)}
                                    />
                                    <CardTitle
                                    subtitle={item.title}
                                    />
                                    <CardContent text={item.content} />
                                    <CardAction 
                                    separator={true} 
                                    inColumn={false}>
                                    <CardButton
                                        onPress={() => {}}
                                        title="Share"
                                        color="#FEB557"
                                    />
                                    <CardButton
                                        onPress={() => {}}
                                        title="Explore"
                                        color="#FEB557"
                                    />
                                    </CardAction>
                              </Card>
                            </TouchableOpacity>
                            </View>  ))
                        }
                        </ScrollView>
                  </PTRView>

            
            </DrawerLayoutAndroid>

        )
    }
}

export default NewsComponent;

const styles = StyleSheet.create ({
    item: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       padding: 20,
       margin: 2,
       borderColor: 'green',
       borderWidth: 1,
       backgroundColor: 'skyblue'
    },
    itemList:{
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       padding: 20,
       margin: 2,
       borderColor: 'blue',
       borderWidth: 1,
       backgroundColor: 'yellow'
    }
 })