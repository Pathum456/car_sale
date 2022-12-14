import {StyleSheet, PermissionsAndroid, Platform, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  NativeBaseProvider,
  Text,
  Input,
  VStack,
  Button,
  View,
  HStack,
  Image,
} from 'native-base';
import {launchImageLibrary} from 'react-native-image-picker';
import * as Animatable from 'react-native-animatable';

//launchCamera(options, callback);

// You can also use as a promise without 'callback':
//const result = await launchCamera(options);

export default function MannageCar({navigation, route}) {
  //const [cameraPhoto, setCameraPhoto] = useState();
  const [galleryPhoto, setGalleryPhoto] = useState();
  const [carBrand, setCarBrand] = useState(route.params.item.brandname);
  const [carPrice, setCarPrices] = useState(route.params.item.price);
  const [contactNo, setContactNo] = useState(route.params.item.contact);
  const [vehicleNo, setVehicleNo] = useState(route.params.item.vehicleNo);

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
  // const createFormData = (photo, body) => {
  //   const data = new FormData();

  //   data.append('photo', {
  //     name: photo.fileName,
  //     type: photo.type,
  //     uri:
  //       Platform.OS === 'android'
  //         ? photo.uri
  //         : photo.uri.replace('file://', ''),
  //   });

  //   console.log(data.uri);

  //   Object.keys(body).forEach(key => {
  //     data.append(key, body[key]);
  //   });

  //   console.log(data._parts);

  //   return data;
  // };
  const updateCar = async () => {
    fetch('http://192.168.8.104:4000/cars/update', {
      method: 'PUT',
      body: JSON.stringify({
        vehicleNo: vehicleNo,
        carPrice: carPrice,
        contactNo: contactNo,
      }),

      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => {
        response.json();
      })
      .then(json => {
        // console.log('upload succes', response);
        Alert.alert('Upload success!');
        navigation.navigate('ViewCarDetailsPage');
      })
      .catch(error => {
        console.log('upload error', error);
        Alert.alert('Upload failed!');
      });
  };
  const deleteCar = () => {
    fetch(`http://192.168.8.104:4000/cars/deleteCar/${vehicleNo}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(json => {
        if (json.status === '200') {
          Alert.alert(json.message);
          navigation.navigate('ViewCarDetailsPage');
        } else {
          Alert.alert(json.message);
        }
      })
      .catch(_err => {
        Alert.alert('Error occured,Please try again later.');
      });
  };
  return (
    <NativeBaseProvider>
      <View style={styles.view_set}>
        <VStack space={2} alignItems="center">
          <Image
            source={{uri: galleryPhoto}}
            alt=""
            position="absolute"
            borderColor="black"
            w="100%"
            h={278}
            resizeMode="cover"
          />
        </VStack>

        <VStack space={2} alignItems="center">
          <Button
            variant="subtle"
            bg="white"
            shadow={5}
            size="lg"
            w={100}
            h={100}
            mt={185}
            zIndex={1000}
            position="absolute"
            borderRadius={100}
            onPress={openGallery}>
            <Animatable.View
              animation="pulse"
              iterationCount="infinite"
              direction="alternate"
              easing="ease-in-sine"
              duration={2000}>
              <Image
                shadow={5}
                w="60"
                source={require('../assets/images/icons8-add-image-64.png')}
                alt="Alternate Text"
              />
            </Animatable.View>
          </Button>
          <View style={styles.container} mt={228}>
            <VStack space={6} alignItems="center" mt={20}>
              <Animatable.View
                animation="zoomInLeft"
                iterationCount={1}
                direction="alternate"
                easing="ease-in-sine"
                duration={1000}
                delay={500}>
                <Input
                  shadow={1}
                  type="text"
                  variant="rounded"
                  mx="3"
                  value={vehicleNo}
                  onChangeText={e => {
                    setVehicleNo(e);
                  }}
                  placeholder="Vehicle No"
                  w="90%"
                  fontSize={18}
                  position="relative"
                />
              </Animatable.View>
              <Animatable.View
                animation="zoomInLeft"
                iterationCount={1}
                direction="alternate"
                easing="ease-in-sine"
                duration={1500}
                delay={1000}>
                <Input
                  shadow={1}
                  type="text"
                  variant="rounded"
                  mx="3"
                  value={carBrand}
                  onChangeText={e => {
                    setCarBrand(e);
                  }}
                  placeholder="Brand Name"
                  w="90%"
                  fontSize={18}
                  position="relative"
                />
              </Animatable.View>
              <Animatable.View
                animation="zoomInLeft"
                iterationCount={1}
                direction="alternate"
                easing="ease-in-sine"
                duration={2000}
                delay={1500}>
                <Input
                  shadow={1}
                  type="text"
                  variant="rounded"
                  mx="3"
                  value={carPrice}
                  onChangeText={e => {
                    setCarPrices(e);
                  }}
                  placeholder="Price"
                  w="90%"
                  fontSize={18}
                  position="relative"
                />
              </Animatable.View>
              <Animatable.View
                animation="zoomInLeft"
                iterationCount={1}
                direction="alternate"
                easing="ease-in-sine"
                duration={2500}
                delay={2000}>
                <Input
                  shadow={1}
                  type="text"
                  variant="rounded"
                  mx="3"
                  value={contactNo}
                  onChangeText={e => {
                    setContactNo(e);
                  }}
                  placeholder="Contact "
                  w="90%"
                  fontSize={18}
                  position="relative"
                />
              </Animatable.View>
              <HStack space={60} my={5}>
                <Animatable.View
                  animation="zoomInLeft"
                  iterationCount={1}
                  direction="alternate"
                  easing="ease-in-sine"
                  duration={3000}
                  delay={2500}>
                  <Button
                    shadow={5}
                    size="md"
                    variant="subtle"
                    borderRadius={30}
                    bg="red.500"
                    w={'32'}
                    onPress={deleteCar}>
                    Delete
                  </Button>
                </Animatable.View>
                <Animatable.View
                  animation="zoomInRight"
                  iterationCount={1}
                  direction="alternate"
                  easing="ease-in-sine"
                  duration={3000}
                  delay={2500}>
                  <Button
                    shadow={5}
                    size="md"
                    variant="subtle"
                    borderRadius={30}
                    bg="primary.500"
                    w={'32'}
                    onPress={updateCar}>
                    Update
                  </Button>
                </Animatable.View>
              </HStack>
            </VStack>
          </View>
        </VStack>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  view_set: {
    backgroundColor: '#51ceed',
    width: '100%',
    height: 690,
  },
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: 450,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});
