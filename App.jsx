import { Provider as PaperProvider } from "react-native-paper";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import MainView from "@src/MainView";
import AuthView from "@src/AuthView";
import { useUserStore } from "@src/store";

/**
 * si el usuario esta logueado, lo dirige a la pagina principal
 * si no, lo dirige al login/signup
 */

const Tab = createMaterialBottomTabNavigator();
export const App = () => {
  const isLoggedIn = useUserStore((state) => !!state.currentUser);

  return (
    <PaperProvider>
      <NavigationContainer>
        {isLoggedIn ? <MainView /> : <AuthView />}
      </NavigationContainer>
    </PaperProvider>
  );
};

// constants

export default App;
