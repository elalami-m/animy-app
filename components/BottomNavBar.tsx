import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

const listOfRoutes: {
  name: string;
  goTo: string;
  icon: (color: string) => JSX.Element;
}[] = [
  {
    name: "Home",
    goTo: "Home",
    icon: (color) => <AntDesign name="home" size={22} color={color} />,
  },
  {
    name: "Calendar",
    goTo: "Calendar",
    icon: (color) => <AntDesign name="calendar" size={22} color={color} />,
  },
  {
    name: "My List",
    goTo: "MyList",
    icon: (color) => (
      <Ionicons name="md-bookmark-outline" size={22} color={color} />
    ),
  },
  {
    name: "Download",
    goTo: "Download",
    icon: (color) => (
      <Ionicons name="cloud-download-outline" size={22} color={color} />
    ),
  },
  {
    name: "Profile",
    goTo: "Profile",
    icon: (color) => <AntDesign name="user" size={22} color={color} />,
  },
];

const BottomNavBar: React.FC<{ routeName: string }> = ({ routeName }) => {
  const navigation = useNavigation();
  console.log(routeName);

  return (
    <View className="flex-row absolute top-[97%] w-full py-3  px-6 rounded-xl">
      {listOfRoutes?.map((route, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              navigation.navigate(route.goTo);
            }}
            className="items-center justify-center w-1/5"
          >
            {route.icon(routeName === route.name ? "#5c5f72" : "#aaaaaa")}
            <Text
              className={`text-[10px] ${
                routeName === route.name ? "text-midnight-400" : "text-gray-400"
              }`}
            >
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavBar;
