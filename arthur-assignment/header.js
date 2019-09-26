import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
        <View style={styles.navHeader}>
            <Text style={styles.title}> 
               Arthur Manyenya
            </Text>
            <View style={styles.imgContainer}>
             <Image
            style={styles.image}
            source={{ uri: "http://arthurmanyenya.com/css/images/logo--11.png" }}
          />
          <Image
            style={styles.image}
            source={{ uri: "http://arthurmanyenya.com/css/images/logo--11.png" }}
          />
          </View>
        </View>
    );
  }
}

const IMAGE_SIZE = 150;

const styles = StyleSheet.create({

  navHeader:{
    backgroundColor: '#ffffff',
    
  },

  title:{
    color: '#02273e',
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    margin: 50,
  },

  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    backgroundColor: "white",
  },
  imgContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: 'space-around',

  }

});