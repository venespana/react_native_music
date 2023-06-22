import React from "react";

import { useColorScheme } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";

import Explore from "~pages/Explore";
import Home from "~pages/Home";
import Library from "~pages/Library";

const Tab = createMaterialBottomTabNavigator();

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: "home-variant",
            }}
          />
          <Tab.Screen
            name="Explore"
            component={Explore}
            options={{ tabBarIcon: "compass" }}
          />
          <Tab.Screen
            name="Library"
            component={Library}
            options={{ tabBarIcon: "music-box-multiple" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
