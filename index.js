import React from 'react';
import Button from './button.js';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';


export default class OfficeTour extends React.Component {
 
  constructor(){
    super(); 

    // this.styles = StyleSheet.create({
    //   menu: {
    //     // flexbox styling for Button View
    //     flex: 1,
    //     flexDirection: 'column',
    //     width: 1,
    //     alignItems: 'stretch',
    //     transform: [{translate: [2, 2, -5]}],
    //   },
    // }); 
      
    this.state = { 
      data: null, 
      locationId: null,
      nextLocationId: null, 
      rotation: null, 
      //zoom: frontDesk.jpeg

    }
  }

  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to Decipher
          </Text>
        </View>
      </View>

  //   <View style={ this.styles.menu }>      <Button text='Hallway'
  //       callback={() => this.setState((prevState) => ({ zoom: stairwell.jpeg }) ) } />
  //     <Button text='-'
  //       callback={() => this.setState((prevState) => ({ zoom: stairwell.jpeg}) ) } />
  //   </View>
     );
  }
};



class tourSample extends React.Component {
  defautProps = {
    tourSource: 'tourData.json'
  }
}





const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
     
  },
});

AppRegistry.registerComponent('OfficeTour', () => OfficeTour);
