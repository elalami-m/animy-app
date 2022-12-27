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
    <AndroidSafeAreaView className="">
      <View className="flex-1 justify-center items-center bg-white p-4">
        <Text className="font-bold text-white">HomeScreen Page</Text>
      </View>
      <BottomNavBar
        listOfNavigations={[
          {
            icon: () => (
              <AntDesign
                name="stepforward"
                size={24}
                className="bg-midnight-500"
              />
            ),
            title: "test",
            navigateTo: "Home",
          },
        ]}
      />
    </AndroidSafeAreaView>
  );
};

export default HomeScreen;
