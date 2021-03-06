import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Card from '../components/Card';
import CustomButton from '../components/CustomButton';

export default class ActivityTracker extends React.Component {
  render() {  
  return (
    <View
      style={styles.container}
    >
      <Card style={styles.homeCard}>
        <View><Text style={styles.text}>Create your custom exercise plan here!</Text></View>
        <CustomButton
          style={styles.button}
          title="Add An Exercise"
          onPress={() => {
            this.props.navigation.navigate('AddExercise');
          }}
        />
        <CustomButton
          style={styles.button}
          title="View My Exercise Plan"
          onPress={() => {
            //props.navigation.navigate('nihal add the screen here');
          }}
        />
      </Card>
      <Card style={styles.homeCard}>
        <View><Text style={styles.text}>Track and update your macronutrient intake here.</Text></View>
        <CustomButton
          style={styles.button}
          title="Plan My Nutrition Goals"
          onPress={() => {
            //props.navigation.navigate('nihal add the screen here');
          }}
        />
        <CustomButton
          style={styles.button}
          title="Track My Macros"
          onPress={() => {
            //props.navigation.navigate('nihal add the screen here');
          }}
        />
      </Card>
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  homeCard: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginHorizontal: 15
  },
  text: {
    fontFamily: 'nunito',
    fontSize: 18
  },
  button: {
    marginVertical: 15
  }
});