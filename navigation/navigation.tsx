import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { Calendar, Download, HomeScreen, MyList, Profile } from "../screens";

const Stack = createStackNavigator();

const rootRoute: { component: any; name: string }[] = [
  { component: HomeScreen, name: "Home" },
  { component: Profile, name: "Profile" },
  { component: MyList, name: "MyList" },
  { component: Download, name: "Download" },
  { component: Calendar, name: "Calendar" },
];

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {rootRoute.map((component) => (
        <Stack.Screen
          component={component.component}
          name={component.name}
          key={component.name}
        />
      ))}
    </Stack.Navigator>
  );
};

export default Navigation;
