import { Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Recomendar from "../Screen/RecomendarContainer/Recomendar";
import styles from "../../Styles";
import RecoNavigator from "./RecoNavigator";

const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTabs.Screen
        name="ShopNavigator"
        component={RecoNavigator}
        options={{
          tabBarIcon: () => (
            <View>
              <MaterialIcons name="local-movies" size={35} color="black" />
              <Text>Top</Text>
            </View>
          ),
        }}
      />
            <BottomTabs.Screen
        name="Recomendar"
        component={Recomendar}
        options={{
          tabBarIcon: () => (
            <View>
              <MaterialCommunityIcons name="movie-edit-outline" size={35} color="black" />
              <Text>Reco</Text>
            </View>
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};
