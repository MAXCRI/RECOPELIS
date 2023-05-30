import { COLORS } from "../constants/colors";
import DetailsScreen from "../Screen/DetailsScreen";
import ProductsScreen from "../Screen/ProductsScreen";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListRecomendados from "../Screen/ListRecomendados";

const RecoNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor:"#CBC5D6",
        },
        headerTintColor: COLORS.quaternary,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={ListRecomendados}
        options={{
          title: "RECOEMENDACIONES",
        }}
      />
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

export default RecoNavigator;
