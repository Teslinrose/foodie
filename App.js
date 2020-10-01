import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Properties} from './src/config/properties';

const Foodie = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Foodie app</Text>
    </View>
  );
};
export default Foodie;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Properties.color.black,
  },
  text: {
    color: Properties.color.green,
    fontSize: 20,
    fontFamily: Properties.fonts.default,
  },
});
