import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import * as Font from "expo-font";
import Navigation from "./routes/homeStack";
import AuthNavigation from "./routes/authStack";
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
// import GeoFencing from '@thyrith/react-native-geo-fencing';
import _ from 'lodash';


LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default App = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const loggedIn = true;

  useEffect(() => {
    prepareResources();
  }, [])

  prepareResources = async () => {
    await cacheAssets();
    setAppIsReady(true);
  };

  if (!appIsReady) {
    return <Text>loading... </Text>;
  }

  return (
    <>
      {
        loggedIn ? <Navigation /> : <AuthNavigation />
      }
    </>

  );

}

async function cacheAssets() {
  const fontAssets = cacheFonts([
    { "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf") },
    { "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf") },
    { "poppins-semiBold": require("./assets/fonts/Poppins-SemiBold.ttf") },
  ]);

  await Promise.all([...fontAssets]);
}

function cacheFonts(fonts) {
  return fonts.map((font) => Font.loadAsync(font));
}