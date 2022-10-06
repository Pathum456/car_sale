import {StyleSheet} from 'react-native';
import React from 'react';

import {
  NativeBaseProvider,
  Text,
  Input,
  VStack,
  Button,
  View,
  HStack,
  Spinner,
  Heading,
  StatusBar,
} from 'native-base';

export default function NavigationBar() {
  return (
    <NativeBaseProvider>
      <View style={styles.view_set}>
        <HStack space={2} justifyContent="center" mt="50%">
          <Spinner accessibilityLabel="Loading posts" size="lg" />
          <Heading color="primary.500" fontSize="3xl">
            Loading
          </Heading>
        </HStack>
      </View>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  text_input: {
    backgroundColor: '#3273a8',
    width: '100%',
    height: '100%',
  },
  view_set: {
    backgroundColor: '#F9E7FE',
    width: '100%',
    height: 690,
  },
});
