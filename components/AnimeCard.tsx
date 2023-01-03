import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

type Props = {
  rating?: string;
  image: string;
  title: string;
};

const AnimeCard: React.FC<Props> = ({ image, title, rating }) => {
  return (
    <TouchableOpacity className="rounded-lg">
      <Text className="absolute z-30 text-white bg-midnight-600 py-1 px-2 ml-2 mt-2 rounded-lg">
        {rating}
      </Text>
      <Image
        source={{
          uri: image,
        }}
        className="h-48 w-32 rounded-lg"
      />
      <View className="top-[68%] absolute items-center z-30 ml-1">
        <Text className="text-white font-Montserrat  text-6xl text-center">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AnimeCard;
