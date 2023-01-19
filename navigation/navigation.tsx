import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { BottomNavBar } from "../components";
import {
  AnimeDetails,
  Calendar,
  Download,
  HomeScreen,
  MyList,
  Profile,
} from "../screens";

const BottomTabNavigator = createBottomTabNavigator();

const rootRoute: { component: any; name: string }[] = [
  { component: HomeScreen, name: "Home" },
  { component: Profile, name: "Profile" },
  { component: MyList, name: "MyList" },
  { component: Download, name: "Download" },
  { component: Calendar, name: "Calendar" },
  { component: AnimeDetails, name: "AnimeDetails" },
];

const Navigation = () => {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state }) => (
        <BottomNavBar navigation={navigation} state={state} />
      )}
    >
      {rootRoute.map((component) => (
        <BottomTabNavigator.Screen
          component={component.component}
          name={component.name}
          key={component.name}
          options={{
            tabBarStyle: {
              display: "none",
            },
          }}
        />
      ))}
    </BottomTabNavigator.Navigator>
  );
};

export default Navigation;
