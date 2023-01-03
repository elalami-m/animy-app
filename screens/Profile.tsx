import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { AndroidSafeAreaView, BottomNavBar } from "../components";
import { View, Text } from "react-native";
import React from "react";

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, "Profile">;
};

const Profile: React.FC<Props> = ({ navigation }) => {
  return (
    <AndroidSafeAreaView>
      <View className="flex-1 justify-center items-center bg-gray-200 p-4">
        <Text className="font-bold text-2xl">Profile Page</Text>
      </View>
    </AndroidSafeAreaView>
  );
};

export default Profile;
