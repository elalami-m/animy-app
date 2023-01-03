import { View } from "react-native";
import React from "react";
import { Logo } from "./icons";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const Header: React.FC = () => {
  return (
    <View className="absolute z-20 top-14 w-full flex-row justify-between px-4">
      <Logo />
      <View className="flex-row w-16 items-center justify-between">
        <AntDesign name="search1" size={24} color="#aaa" />
        <Ionicons name="notifications-outline" size={24} color="#aaa" />
      </View>
    </View>
  );
};

export default Header;
