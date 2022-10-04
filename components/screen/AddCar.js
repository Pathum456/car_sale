import {Alert, StyleSheet, PermissionsAndroid} from 'react-native';
import React, {useState} from 'react';
import {
  NativeBaseProvider,
  Text,
  Input,
  VStack,
  Button,
  View,
  Heading,
  HStack,
  Image,
} from 'native-base';
import {launchImageLibrary} from 'react-native-image-picker';

//launchCamera(options, callback);

// You can also use as a promise without 'callback':
//const result = await launchCamera(options);

export default function AddCar() {
  //const [cameraPhoto, setCameraPhoto] = useState();
  const [galleryPhoto, setGalleryPhoto] = useState();

  let options = {
    saveToPhotos: true,
    mediaType: 'photo,',
  };
  /*const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      setCameraPhoto(result.assets[0].uri);
    }
  };*/
  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    setGalleryPhoto(result.assets[0].uri);
    console.log(result.assets[0]);
  };

  return (
    <NativeBaseProvider>
      <View style={styles.view_set}>
        <VStack space={4} alignItems="center">
          <Heading fontSize="3xl" textAlign="center" ml="5%" mt="5%">
            Add Car Details
          </Heading>
          <Image
            size={300}
            source={{uri: galleryPhoto}}
            alt="Alternate Text"
            mt="5%"
          />
          <Button
            size="md"
            variant="subtle"
            bg="primary.300"
            w={'32'}
            shadow={5}
            onPress={openGallery}>
            Upload Image
          </Button>
        </VStack>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  view_set: {
    backgroundColor: '#F9E7FE',
    width: '100%',
    height: 690,
  },
});
