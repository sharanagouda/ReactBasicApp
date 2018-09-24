import React from 'react';
import {Text, View, TouchableOpacity,Button,StyleSheet, DrawerLayoutAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from "react-redux";
import {DrawerNavigator} from 'react-navigation'

import Sidebar from "./../components/Sidebar";
import Toolbar from "./../components/Toolbar";

class Home extends React.Component {

    constructor(){
        super()
        this.state = {
          resultText: "",
          calculationText:""
        }
        this.operations = ['CLR','DEL', '+', '-','*','/' ]
      }

      openDrawer = () => {
        this.drawer.openDrawer();
    }
      
      calculateResult() {
        const text = this.state.resultText
        this.setState({
          calculationText: eval(text)
    
        })
        //BODMAS rule
        
      }
    
        validate(){
          const text = this.state.resultText
          switch(text.slice(-1)){
            case '+':
            case '-':
            case '*':
            case '/':
                return false
          }
          return true
        }
    
      buttonPressed(text){
        console.log(text)
    
        if(text == '=')
        {
          return this.validate() && this.calculateResult()
        }
          this.setState({
            resultText: this.state.resultText+text
          })
    
      }
     
      operate(operation){
          switch(operation){
            case 'DEL':
             const text = this.state.resultText.split('')
             text.pop()
             this.setState({
               resultText: text.join('')
             })
             break;
           case 'CLR': 
           this.setState({
            resultText: "",
            calculationText:""
           })
           break;
            case '+':
            case '-':
            case '*':
            case '/':
                if(this.state.text == "")
              return
                this.setState({
                    resultText: this.state.resultText + operation
                })
           
          }
      }

          
  
        

    render(){
        const navigationView = (<Sidebar/>);
        let rows = []
        for(let i = 0;i < 4;i++){
          let row = []
          let nums = [[1,2,3],[4,5,6],[7,8,9],[".",0,"="]]
          for(let j= 0;j<3;j++){
            row.push(<TouchableOpacity key={nums[i][j]}
             onPress={() => this.buttonPressed(nums[i][j])}
             style={styles.btn}>
             <Text style= {styles.btntext}>{nums[i][j]}</Text>
             </TouchableOpacity>)
          }
          rows.push(<View key={nums[i]} style={styles.row}>{row}</View>)
        }
      
        let operations = ['CLR','DEL','+','-','*','/']
        let ops = []
        for(let i = 0;i < 6; i++){
          ops.push(<TouchableOpacity key={operations[i]}
                  onPress={() => this.operate(operations[i])}
                style={styles.btn}>
                <Text style= {[styles.btntext , styles.white]}>{operations[i]}</Text>
             </TouchableOpacity>)
        }
        return (
            <DrawerLayoutAndroid
                  id="drwaer"
                    drawerWidth={300}
                    ref={node => this.drawer = node}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={() => navigationView}>
                 <Toolbar openDrawer={this.openDrawer} toolbarName="React Tutorial"/>
                <View style={styles.container}>
                    <View style={styles.result}>
                       <Text style={styles.resultText}>{this.state.resultText}</Text>
                    </View>
                    <View style={styles.calculation}>
                       <Text style={styles.calculationText}>{this.state.calculationText}</Text>
                    </View>
                    <View style={styles.buttons}>
                        <View style={styles.numbers}>
                          {rows}
                        </View>
                        <View style={styles.operations}>
                            {ops}
                        </View>
                    </View>
                </View>
            </DrawerLayoutAndroid>
        )
    }
}

mapDispatchToProps = dispatch => ({
})

export default connect(null, mapDispatchToProps)(Home);

    const styles = StyleSheet.create({
        container: {
            flex:1
        },
        calculationText:{
            fontSize: 20,
            color: 'black'
        },
        resultText :{
           fontSize: 30,
           color: 'black'
        },
        btntext:{
          fontSize:30,
          color:'white'
        },
        white:{
          color: 'white'
        },
        row: {
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center'
        },
        btn: {
          flex: 1,
          alignItems:'center',
          alignSelf:'stretch',
          justifyContent:'center'
        },
        result: {
          flex: 2,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems:'flex-end'
          
        },
        calculation: {
          flex:1,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems:'flex-end'
        },
        buttons:{
          flexDirection: 'row',
          flex: 7
        },
        numbers: {
          flex:3,
          backgroundColor: '#434343'
          
        },
        operations: {
          flex:1,
          justifyContent:'space-around',
          alignItems: 'stretch',
          backgroundColor: '#636363'
        }
      })
