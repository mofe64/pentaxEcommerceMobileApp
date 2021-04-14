import React, { useState } from 'react';
import AppTabNavigator from './navigation/appNavigator';
import { Image } from 'react-native';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}


export default function App() {
  const [isReady,setIsReady] = useState(false);
  const _loadAssetsAsync = async () => {
    const imageAssets = cacheImages([
      require('./assets/shoe.webp'),
      require('./assets/watch.png'),
      require('./assets/bag.png'),
    ]);
    await Promise.all([...imageAssets])
  }
  if (!isReady) {
    return (
      <AppLoading
        startAsync={_loadAssetsAsync}
        onFinish={setIsReady(true)}
        onError={console.warn}
      />
    )
  }
  return (
    <AppTabNavigator />
  );
}


