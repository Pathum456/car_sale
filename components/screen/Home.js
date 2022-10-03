import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <View style={styles.text_input}>
      <Text>Home</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text_input: {
    backgroundColor: '#3273a8',
    width: '100%',
    height: '100%',
  },
});
