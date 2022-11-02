import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from './Home';
import Feed from './Feed';
import DiscoverTopic from './DiscoverTopic';
import Following from './Following';
import Details from '@src/Details';

const Tab = createMaterialBottomTabNavigator();
const MainView = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color /* size */ }) => (
          <Ionicons name={icons[route.name][focused]} size={23} color={color} />
        ),
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen
        name="DiscoverTopic"
        options={{ tabBarLabel: "Discover" }}
        component={DiscoverTopic}
      />
      <Tab.Screen name="Following" component={Following} />
      <Tab.Screen name="Details" component={Details} />
    </Tab.Navigator>
  );
};

const icons = {
    Details: {
        true: "information-circle-outline",
        false: "information-circle",
    },
    Feed: {
        true: "list-outline",
        false: "list",
    },
    DiscoverTopic: {
        true: "glasses-outline",
        false: "glasses",
    },
    Following: {
        true: "people-circle-outline",
        false: "people-circle",
    },
    Home: {
        true: "home-outline",
        false: "home",
    },
};

export default MainView;

