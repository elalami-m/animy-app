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
  Image,
} from "react-native";
import React, { useRef, useState } from "react";
import { Video, ResizeMode } from "expo-av";
import { ANIMECARD } from "../data/animecard";

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, "HomeScreen">;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const videoRef = useRef<any>();
  const [videoStatus, setVideoStatus] = useState<any>({});

  return (
    <View className="flex-1">
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
            <View className="absolute w-full h-full bg-black z-20 opacity-20"></View>
            <Video
              resizeMode={ResizeMode.STRETCH}
              source={{
                uri: "https://assets14.ign.com/videos/zencoder/2021/03/16/1280/d3ca20430fe173058fb4b4680d38bda1-1910000-1615921598.mp4",
              }}
              className="w-full h-full relative z-0"
              ref={videoRef}
              onPlaybackStatusUpdate={setVideoStatus}
              posterStyle={{
                resizeMode: "cover",
              }}
              posterSource={{
                uri: "https://pic.bstarstatic.com/ugc/5c1f3b1490891484a65a0ba715f18022bfe7135c.jpg@960w_540h_1e_1c_1f.webp",
              }}
              usePoster
            />
            <View className="absolute z-50 top-[215px] w-full px-4">
              <Text className="font-Montserrat text-xl text-white">
                Demon Slayer : Kimetsu...
              </Text>
              <Text className="font-Montserrat-Thiny text-white text-xs mt-2">
                Action, Shounen, Material
              </Text>
              <View className="flex-row mt-1 space-x-4">
                <TouchableOpacity
                  className="flex-row items-center bg-midnight-500 rounded-full py-2 px-3 w-[85px] "
                  onPress={() =>
                    videoStatus.isPlaying
                      ? videoRef.current.pauseAsync()
                      : videoRef.current.playAsync()
                  }
                >
                  <AntDesign name="play" size={15} color="white" />
                  <Text className="font-Montserrat text-center  text-white text-xs  ml-2">
                    {videoStatus.isPlaying ? "Pause" : "Play"}
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
