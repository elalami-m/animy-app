import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { AndroidSafeAreaView, BottomNavBar } from "../components";
import { AntDesign } from "@expo/vector-icons";
import { View, Text } from "react-native";
import React from "react";

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, "HomeScreen">;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <AndroidSafeAreaView>
      <View className="flex-1 justify-center items-center p-4">
        <Text className="">HomeScreen Page</Text>
      </View>
      <BottomNavBar routeName="Home" />
    </AndroidSafeAreaView>
  );
};

export default HomeScreen;
