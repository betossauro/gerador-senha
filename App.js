import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/home/Home";
import History from "./src/screens/history/History";
import Signin from "./src/screens/signin/Signin";
import Signup from "./src/screens/signup/Signup";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ title: "Signin" }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ title: "Signup" }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{ title: "Histórico" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
