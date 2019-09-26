import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, } from 'react-native';

export default class Info extends React.Component {
  render() {
    return (
        <View style={styles.bottomSection}>
          <Text>{this.props.title}</Text>
          <Text>{this.props.content}</Text>
        </View>
    );
  }
}

const IMAGE_SIZE = 150;

const styles = StyleSheet.create({
    
    bottomSection:{
   
        backgroundColor: 'green',
      },
 
});