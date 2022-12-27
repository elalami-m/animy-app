import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { HomeScreen } from "../screens";

const Stack = createStackNavigator();

const rootRoute = [{ component: HomeScreen, name: "Home" }];

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
