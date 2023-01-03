import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

const LoadFonts = () => {
  const [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat/static/Montserrat-Medium.ttf"),
    Roboto: require("../assets/fonts/Roboto/Roboto-Italic.ttf"),
    "Montserrat-Thiny": require("../assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf"),
    "Montserrat-Bold": require("../assets/fonts/Montserrat/static/Montserrat-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
};

export default LoadFonts;
