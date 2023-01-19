import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { AndroidSafeAreaView } from "../components";
import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, "AnimeDetails">;
};

const AnimeDetails: React.FC<Props> = ({ navigation }) => {
  return (
    <View className="flex-1">
      <ScrollView>
        <View className="w-full h-64">
          <Image
            source={{
              uri: "https://demonslayer-hinokami.sega.com/img/purchase/digital-standard.jpg",
            }}
            className="h-full w-full"
          />
        </View>
        <View className="h-60 w-full px-4"></View>
      </ScrollView>
    </View>
  );
};

export default AnimeDetails;
