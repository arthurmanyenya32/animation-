import * as React from 'react';
import { Text, View, StyleSheet, Animated, ScrollView, Image, } from 'react-native';
import Constants from 'expo-constants';
import Header from './header';
import Info from './info';

import dataJSON from './data.json';

const { UIManager } = NativeModules;
if (Platform.OS === 'android') {
 if (UIManager.setLayoutAnimationEnabledExperimental) {
   UIManager.setLayoutAnimationEnabledExperimental(true);
 }

export default class App extends React.Component {

  text1 = new Animated.Value(1)

  state = { data: []}

  componentDidMount() {
    this.setState({data: dataJSON})
  }


  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Header></Header>
        <View style={styles.topSection}>
        <ScrollView horizontal>
           <Image
            style={styles.image1}
            source={{ uri: "http://arthurmanyenya.com/css/images/devon_sprite.jpg" }}
          />
           <Image
            style={styles.image1}
            source={{ uri: "http://arthurmanyenya.com/css/images/katy_sprite.jpg" }}
          /> 
          <Image
            style={styles.image1}
            source={{ uri: "http://arthurmanyenya.com/css/images/anastezia_sprite.jpg" }}
          /> 
          <Image
            style={styles.image1}
            source={{ uri: "http://arthurmanyenya.com/css/images/mukama_sprite.jpg" }}
          />
        </ScrollView>
        </View>
        {

<Animated.Text style={{...styles.h1,
  opacity: this.text1
}}>Hello World1!</Animated.Text>
          this.state.data.map((info, index) =>
            <Info
              key={index}
              title={info.title}
              content={info.content}>

            </Info>
          )
        }

        
      </ScrollView>
    );
  }
}

const IMAGE_SIZE = 150;

const styles = StyleSheet.create({

  // Background Div

  container: {
    
    marginTop: 30,
    paddingBottom: 30,
  },
 
  topSection:{
    
    backgroundColor: '#ffffff',
  },

  image1: {
    width: IMAGE_SIZE*3,
    height: IMAGE_SIZE*2,
    backgroundColor: "white",
    margin: 20
  },
  
  
 
});