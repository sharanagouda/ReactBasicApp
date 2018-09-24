import React,{Component} from 'react';
import { Text, View, StyleSheet, ScrollView,DrawerLayoutAndroid } from 'react-native';
import Sidebar from "./../components/Sidebar";
import Toolbar from "./../components/Toolbar";

class ScrollViewCmponent extends Component {
   state = {
      names: [
         {'name': 'Sharan', 'id': 1},
         {'name': 'Kallay', 'id': 2},
         {'name': 'Madu', 'id': 3},
         {'name': 'John', 'id': 4},
         {'name': 'Devid', 'id': 5},
         {'name': 'Laura', 'id': 6},
         {'name': 'Imarn', 'id': 7},
         {'name': 'Akhabar', 'id': 8},
         {'name': 'Aron', 'id': 9},
         {'name': 'Ann', 'id': 10},
         {'name': 'Steve', 'id': 11},
         {'name': 'Olivia', 'id': 12},
         {'name': 'Madu', 'id': 13},
         {'name': 'John', 'id': 14},
         {'name': 'Devid', 'id': 15},
         {'name': 'Laura', 'id': 16},
         {'name': 'Imarn', 'id': 17},
         {'name': 'Akhabar', 'id': 18},
         {'name': 'sharan', 'id':19},
         {'name': 'raam', 'id':20},
         {'name': 'Sharan', 'id': 21},
         {'name': 'Kallay', 'id': 22},
         {'name': 'Madu', 'id': 23},
         {'name': 'John', 'id': 24},
         {'name': 'Devid', 'id': 25},
         {'name': 'Laura', 'id': 26},
         {'name': 'Imarn', 'id': 27},
         {'name': 'Akhabar', 'id': 28},
         {'name': 'Aron', 'id': 29},
         {'name':'sharan', 'id':30}
      ],
       data:[]
   }
   componentDidMount = ()=> {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET'
      })
      .then((response)=> response.json())
      .then((responseJson)=>{
      //  console.log(responseJson);
        
        this.setState({
            data: responseJson
        })
        //console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
 }

   openDrawer = () => {
    this.drawer.openDrawer();
  }

   render() {
    const navigationView = (<Sidebar/>);
      return (
        <DrawerLayoutAndroid
          id="drawer"
           drawerWidth={300}
           ref={node => this.drawer = node}
           drawerPosition={DrawerLayoutAndroid.positions.Left}
           renderNavigationView={() => navigationView}>
                <Toolbar openDrawer={this.openDrawer} toolbarName="React Tutorial"/>
                <View style={{flex:1}}>
                    <ScrollView>
                      {
                          this.state.names.map((item, index) => (
                            <View key = {index} style = {styles.item}>
                                <Text>{item.name}</Text>
                            </View>
                          ))
                      }
                    </ScrollView>
                </View>

                <View style={{flex:1}}>
                  <ScrollView>
                    {
                      this.state.data.map((item,index)=>(
                        <View key={item.id} style={styles.itemList}>
                            <Text>{item.body}</Text>
                        </View>
                      ))
                    }
                  </ScrollView>
                </View>
        </DrawerLayoutAndroid>
       

     
      )
   }
}
export default ScrollViewCmponent;

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