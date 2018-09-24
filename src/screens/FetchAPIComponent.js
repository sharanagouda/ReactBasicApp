import React,{Component} from 'react';
import {Text,View,ActivityIndicator,FlatList,DrawerLayoutAndroid,Picker,TextInput,StyleSheet,AsyncStorage} from 'react-native';
import styles from '../styles/styles';
import Sidebar from "./../components/Sidebar";
import Toolbar from "./../components/Toolbar";

class FetchAPI extends Component {
  
    constructor(props){
        super(props);
        this.state={
            isLoading:true,
            initialPosition: 'unknown',
            lastPosition: 'unknown',
            
        }
      
      
    }
  

    componentDidMount(){
        return fetch(`https://facebook.github.io/react-native/movies.json`)
        .then((response)=>response.json())
        .then((responseJSON)=>{
            this.setState({
                isLoading:false,
                dataSource:responseJSON.movies,
            }, function(){

            });
        })
        .catch((error)=>{
            console.error(error);
        })
        // navigator.geolocation.getCurrentPosition(
        //     (position)=> {
        //        const initialPosition = JSON.stringify(position);
        //        this.setState({ initialPosition });
        //     },
        //     (error) => alert(error.message),
        //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        //  );
        //  this.watchID = navigator.geolocation.watchPosition((position)=> {
        //     const lastPosition = JSON.stringify(position);
        //     this.setState({ lastPosition });
        //  });

}
    componentWillUnmount = () => {
        navigator.geolocation.clearWatch(this.watchID);
     }

    openDrawer = () => {
        this.drawer.openDrawer();
    }
   render(){
       if(this.state.isLoading){
           return(
               <View style={{flex:1,padding:20}}>
                   <ActivityIndicator/>
               </View>
           )
       }
       const navigationView = (<Sidebar/>);
       return(
        <DrawerLayoutAndroid
            id="drwaer"
            drawerWidth={300}
            ref={node => this.drawer = node}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView}>
                
             <Toolbar openDrawer={this.openDrawer}/>
             <View style={{flex:1}}>
              <View style={{flex: 1, paddingTop:20}}>
                      <Text>These list of data fecthed from Json API, Flatlist view {'\n'}</Text>
                      <FlatList
                        data={this.state.dataSource}
                        renderItem={({item}) =>
                        <Text style={styles.textName}>{item.title}, {item.releaseYear}</Text>}
                        keyExtractor={({id}, index) => id}
                        />
                         
                </View>
                <View style={{flex:2,  borderWidth: 1, borderColor:'black', margin:1,}}>
                    <Text>Hi is is another flex</Text>
                    <View style={{
                        flexDirection:'row',
                        height:100,
                        borderColor:'red',
                        borderWidth:1,
                    }}>
                        <View style={{backgroundColor:'blue', flex:0.3}}>
                          <Text>Hi</Text>
                        </View>
                        <View style={{backgroundColor:'green',justifyContent:'center',alignContent:'center', flex:0.5}}>
                          <Text>Hello</Text>
                        </View>
                        <View style={{backgroundColor:'yellow', flex:0.1}}/>
                        <Text>Hello Photon</Text>
                    </View>

                       
                </View>
         
                {/* <View style = {innerStyles.container}>
                        <Text style = {innerStyles.boldText}>
                        Initial position:
                        </Text>
                            
                        <Text>
                        {this.state.initialPosition}
                        </Text>

                        <Text style = {innerStyles.boldText}>
                        Current position:
                        </Text>
                            
                        <Text>
                        {this.state.lastPosition}
                        </Text>
                </View> */}

             </View>

      </DrawerLayoutAndroid>
       )
   }
}

export default FetchAPI;
