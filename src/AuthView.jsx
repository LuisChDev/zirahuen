import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();
const AuthView = () => (
  <Tab.Navigator
    initialRouteName="Login"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color /* size */ }) => (
        <Ionicons name={icons[route.name][focused]} size={23} color={color} />
      ),
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
    })}
  >
    <Tab.Screen name="Login" component={Login} />
    <Tab.Screen name="Signup" component={Signup} />
  </Tab.Navigator>
);

const icons = {
  Login: {
    "true": "log-in-outline",
    "false": "log-in"
  },
  Signup: {
    "true": "pencil-outline",
    "false": "pencil"
  }
};

export default AuthView;
