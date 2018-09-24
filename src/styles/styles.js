import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
       backgroundColor: '#455a64',
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
   },
   homeContainer: {
       backgroundColor: '#fff1ff',
       flex: 1,
       alignItems: 'center',
       justifyContent: 'flex-start'
   },
   button: {
       width: 300,
       backgroundColor: '#1c313a',
       borderRadius: 25,
       marginVertical: 10,
       paddingVertical: 13
   },
   sidebarContainer: {
       flex: 1,
   },

   sidebarIcon: {
       width: 35,
       height: 35,
       backgroundColor: "#ffef62",
       marginHorizontal: 8,
       alignItems: "center",
       justifyContent: "center",
       borderRadius: 50
   },
   sidebarIconImage: {
       width: 25,
       height: 25
   },

   toolbarContainer: {
       height: 56,
       backgroundColor: "#ff1744",
       width: "100%",
       flexDirection: "row",
       justifyContent: "space-between",
       elevation: 4
   },
   menubar: {
       height: 56,
       alignItems: "center",
       justifyContent: "center",
       width: 36,
       marginHorizontal: 16
   },

   menifestContainer: {
       flexDirection: "row",
       backgroundColor: "#ff7961",
       alignItems: "center",
       padding: 8
   },
   menifestIcon: {
       width: 40,
       height: 40,
       backgroundColor: "#cccccc",
       marginHorizontal: 8,
       alignItems: "center",
       justifyContent: "center",
       borderRadius: 50
   },
   iconImage: {
       width: 30,
       height: 30
   },
   menifestTextCont: {
       flexDirection: "column",
       marginHorizontal: 8
   },
   menifestTitle: {
       fontSize: 18,
       fontWeight: "500"
   },
   menifestSubtitle: {
       fontSize: 14
   },
   menifestDesc: {
       fontSize: 14
   },
   flexibleButton: {
       flex: 1,
       paddingVertical: 8,
       marginHorizontal: 4,
       borderRadius: 2
   },
   marginHorizontal4px: {
       paddingHorizontal: 12
   },
   textName:{
       color:"red",
       fontSize:20
   },
   buttonStyle:{
       color:'red',
       width:200
   },
   toolbarTitle:{
       alignItems:'center',
       flexDirection:'row',
       flex:1
   },
   textHeaderStyle:{
       fontSize:18,
       color:'#FFF',
       textAlign:"center"
   },
   listContainer:{
     padding:10,
     marginTop:3,
     backgroundColor:'#d9f9b2',
     alignItems:'center'
   },
   textList:{
       color:'#4f603c'
   }
});


  export default styles;
