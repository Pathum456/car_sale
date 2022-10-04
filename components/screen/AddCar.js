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
  Center,
  TextArea,
} from 'native-base';
import {launchImageLibrary} from 'react-native-image-picker';

//launchCamera(options, callback);

// You can also use as a promise without 'callback':
//const result = await launchCamera(options);

export default function AddCar() {
  //const [cameraPhoto, setCameraPhoto] = useState();
  const [galleryPhoto, setGalleryPhoto] = useState();
  const [carDetails, setCarDetails] = useState();

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
        <VStack space={5} alignItems="center">
          <Heading fontSize="3xl" underline textAlign="center" ml="5%" mt="5%">
            Add Car Details
          </Heading>

          <Button
            variant="subtle"
            bg="primary.300"
            shadow={5}
            w="80"
            h="90"
            onPress={openGallery}>
            <Center>Upload Image</Center>

            <Image
              shadow={5}
              borderWidth="1"
              borderColor="black"
              w="80"
              h="90"
              source={{uri: galleryPhoto}}
              alt="Alternate Text"
              onPress={openGallery}
            />
          </Button>
          <TextArea
            shadow={1}
            type="text"
            variant="outline"
            mx="3"
            value={carDetails}
            onChangeText={e => {
              setCarDetails(e);
            }}
            placeholder="Car Details"
            w="80%"
            h="30%"
          />
          <Button
            size="md"
            variant="subtle"
            bg="primary.300"
            w={'32'}
            shadow={5}
            onPress={openGallery}>
            Save Car
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
