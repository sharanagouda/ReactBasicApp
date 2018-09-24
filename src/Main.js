import React from 'react';
import { StyleSheet, Text, View , StatusBar} from 'react-native';
import Routes from './config/Routes';
import {connect} from "react-redux";

class Main extends React.Component {
  render() {

    return (
      <View style={styles.container}>
          <Routes/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

mapStateToProps = state => ({
  app: state.app
})

export default connect(mapStateToProps)(Main);
