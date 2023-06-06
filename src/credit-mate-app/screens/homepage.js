import React from "react";
import { COLORS, FONT, SIZES, SHADOWS } from "../constants";
import Navbar from "../components/Navbar";

import NearbyOffers from "../components/NearbyOffers";
import CarouselOffer from "../components/Carousel";

import {
  Button,
  Text,
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { CurvedBottomBarExpo } from "react-native-curved-bottom-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import Example from "./GeoLocationScreen";
import DealAndCashback from "../components/DealAndCashback.jsx";
import HomeScreen from "./homeScreen";
import Colors from "../constants/Colors";
import RedeemScreen from "./RedeemScreen";
import { navigationRef } from './RootNavigation';
import GeoLocationScreen from "./GeoLocationScreen";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import SettingScreen from "./SettingScreen";

const Screen2 = () => {
  return <View style={styles.screen2} />;
};

export default function Home({ navigation }) {
  const routes = [
    {
      type: "ant",
      icon: "home",
      name: "home",
      screen: <HomeScreen navigation={navigation} />,
      bottomHide: false,
    },
    {
      type: "material",
      icon: "redeem",
      name: "RedeemScreen",
      screen: <RedeemScreen navigation={navigation} />,
      bottomHide: false,
    },
    {
      type: "ion",
      icon: "location-outline",
      name: "GeoLocationScreen",
      screen: <GeoLocationScreen navigation={navigation} />,
      bottomHide: true,
    },
    {
      type: "ant",
      icon: "setting",
      name: "SettingScreen",
      screen: <SettingScreen navigation={navigation} />,
      bottomHide: false,
    },
  ];

  const _renderIcon = (routeName, selectedTab) => {
    let route = "";
    routes.forEach((item) => {
      if (item.name === routeName) {
        route = item;
      }
    });

    if (route.type === "ant") {
      return <AntDesign
        name={route.icon}
        size={25}
        color={routeName === selectedTab ? "black" : "gray"}
      />
    } else if (route.type === "material") {
      return <MaterialIcons
        name={route.icon}
        size={25}
        color={routeName === selectedTab ? "black" : "gray"}
      />
    }
    return (
      <Ionicons
        name={route.icon}
        size={25}
        color={routeName === selectedTab ? "black" : "gray"}
      />
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    const bottomHide = routes.find((item) => item.name === routeName).bottomHide;
    return (
      <TouchableOpacity
        onPress={() => {
          if (bottomHide) navigation.navigate(routeName, { name: routeName })
          else navigate(routeName)
        }}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (

    <NavigationContainer >
      <CurvedBottomBarExpo.Navigator
        type="DOWN"
        style={styles.bottomBar}
        shadowStyle={styles.shawdow}
        height={55}
        circleWidth={50}
        bgColor="white"
        initialRouteName="home"
        borderTopLeftRight
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("PaymentScreen", { name: "PaymentScreen" })}
            >
              <Text style={styles.pay}>Pay</Text>
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        {
          routes.map((route, index) => {
            return (
              <CurvedBottomBarExpo.Screen
                key={index}
                name={route.name}
                component={() => route.screen}
                position={index < 2 ? "LEFT" : "RIGHT"}
                options={{ headerShown: false }}
              />
            )
          })
        }
      </CurvedBottomBarExpo.Navigator>
    </NavigationContainer>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  pay: {
    fontSize: 18,
    fontWeight: 600,
    color: "white",

  },
  shawdow: {
    shadowColor: "#DDDDDD",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: "center",
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    bottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    shadowColor: Colors.primary,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: "gray",
  },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: "#BFEFFF",
  },
  screen2: {
    flex: 1,
    backgroundColor: "#FFEBCD",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
  }
});
