import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { AndroidSafeAreaView } from "../components";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import AnimeCard from "./AnimeCard";

type Props = {
  data: Array<{ image: string; title: string; rating: string }>;
  leftText: string;
  rightText: string;
};

const AnimeList: React.FC<Props> = ({ data, leftText, rightText }) => {
  return (
    <View className="">
      <View className="flex-row pt-5 px-3 justify-between">
        <Text className="font-Montserrat text-base">{leftText}</Text>
        <TouchableOpacity>
          <Text className="text-midnight-400">{rightText}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        horizontal
        className="px-3 pt-4"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingEnd: 20,
        }}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                height: "100%",
                width: 10,
              }}
            />
          );
        }}
        renderItem={({ item, index }) => (
          <AnimeCard
            image={item.image}
            title={(index + 1).toString()}
            rating={item.rating}
          />
        )}
      />
    </View>
  );
};

export default AnimeList;
