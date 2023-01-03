import Navigation from "./navigation";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AndroidSafeAreaView from "./components/AndroidSafeAreaView";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { LoadFonts } from "./hooks";

export default function App() {
  if (LoadFonts() === null) return null;

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
