import React from 'react';
import {Text, View, TouchableNativeFeedback} from 'react-native';

import styles from "./../styles/styles";

const defaultProps = {
  backgroundColor: "#1c313a"
}

class Button extends React.Component {

    render(){
        return (
          <TouchableNativeFeedback onPress={() => console.log("boom")}>
              <View style={[styles.flexibleButton, {backgroundColor: this.props.backgroundColor}]}>
                  <Text style={styles.buttonText}>{this.props.buttonName}</Text>
              </View>
          </TouchableNativeFeedback>
        )
    }
}

Button.defaultProps = defaultProps;

export default Button;
