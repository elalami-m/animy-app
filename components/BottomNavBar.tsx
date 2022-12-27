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
    name: "Download",
    goTo: "Download",
    icon: (color) => (
      <Ionicons name="md-bookmark-outline" size={22} color={color} />
    ),
  },
  {
    name: "Profile",
    goTo: "Profile",
    icon: (color) => (
      <Ionicons name="cloud-download-outline" size={22} color={color} />
    ),
  },
  {
    name: "MyList",
    goTo: "MyList",
    icon: (color) => <AntDesign name="user" size={22} color={color} />,
  },
];

const BottomNavBar: React.FC = () => {
  const navigation = useNavigation();
  const [currentRoute, setCurrentRoute] = useState<string>("Home");
  return (
    <View className="flex-row absolute top-[98%] w-full py-2 bg-midnight-400  px-6 rounded-xl">
      {listOfRoutes?.map((route, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setCurrentRoute(route.name);
              navigation.navigate(route.goTo);
            }}
            className="bg-black items-center justify-center w-1/5"
          >
            {route.icon(currentRoute === route.name ? "#161a35" : "#aaaaaa")}
            <Text className={`text-[10px] text-red-400`}>{route.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavBar;
