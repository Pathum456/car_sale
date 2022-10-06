import {StyleSheet} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import {
  NativeBaseProvider,
  Text,
  Input,
  VStack,
  Button,
  View,
} from 'native-base';

export default function Home() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Animatable.View
          animation="slideInUp"
          iterationCount={1}
          direction="alternate"
          easing="ease-in-sine">
          <View style={styles.container2} mt="120%">
            <Button
              borderRadius="full"
              mt="57%"
              ml="50%"
              size="md"
              variant="rounded"
              bg="#BBDEFB"
              w={'32'}
              shadow={5}>
              Get Started
            </Button>
          </View>
        </Animatable.View>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 690,
    width: '100%',
    backgroundColor: '#03A9F4',
  },
  container2: {
    height: '40%',
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
