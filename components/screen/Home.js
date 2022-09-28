import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <View>
      <Text style={styles.text_input}>Home</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text_input: {
    color: 'black',
  },
});
