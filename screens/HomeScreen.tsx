import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { AnimeList, Header } from "../components";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  ScrollView,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useRef } from "react";
import { Video, ResizeMode } from "expo-av";
import { ANIMECARD } from "../data/animecard";

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, "HomeScreen">;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const videoRef = useRef<any>();

  return (
    <View className="flex-1 ">
      <View className="flex-1">
        <Animated.View className="relative z-20">
          <Header />
        </Animated.View>
        <ScrollView
          className="flex-1"
          contentContainerStyle={{
            paddingBottom: 65,
          }}
        >
          <View className="h-80 w-full">
            <Video
              resizeMode={ResizeMode.STRETCH}
              source={{
                uri: "https://imdb-video.media-imdb.com/vi2476588825/1434659607842-pgv4ql-1569416776529.mp4?Expires=1672743259&Signature=hU2GM33jS3bZWXGgzhuptgDKFpJ04sTOQ36BNtndKvRh4mqCzoaZGkHChj7DBHOxbFj99R2~U0HxNSQWPrHnIZGaxULX5k4pvi0fCA7yMni9yYVHThCOoWxv5Ay9EjVoG9Ik-94hi-fXno9RylUcD3d6rwQmsAhqXWHlmcD09nQBStjBlrNkFMaNH3xSEfcil-YqhGDPGQVeoACR87CQCKemalDZID6K9MnuWKyq9bv4ln17X9aA3iiWQRRZZj10ww9pCLU9N4VXa4vSO9wEYykfTh4s2XLushi5nUV78X4rstd6QDalkxFRKxqfO48rOTzkBYFbc~NZMrvTMPX84g__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              }}
              className="w-full h-full relative z-0"
              ref={videoRef}
            />
            <View className="absolute z-50 top-[215px] w-full px-4">
              <Text className="font-Montserrat text-xl text-white">
                Demon Slayer : Kimetsu...
              </Text>
              <Text className="font-Montserrat-Thiny text-white text-xs mt-2">
                Action, Shounen, Material
              </Text>
              <View className="flex-row mt-1 space-x-4">
                <TouchableOpacity className="flex-row items-center bg-midnight-500 rounded-full py-2 px-4 w-[85px] justify-between">
                  <AntDesign name="play" size={15} color="white" />
                  <Text className="font-Montserrat text-center  text-white text-xs">
                    Play
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center border-[1.5px] border-white rounded-full py-1 px-4 w-[100px] space-x-3">
                  <Ionicons name="add-outline" size={15} color="white" />
                  <Text className="font-Montserrat text-center text-white text-xs">
                    My List
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <AnimeList
            data={ANIMECARD}
            leftText="Top Hits Anime"
            rightText="See all"
          />
          <AnimeList
            data={ANIMECARD}
            leftText="New Episodes Realses"
            rightText="See all"
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
