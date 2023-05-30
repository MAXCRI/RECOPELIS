import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import React from "react";

const DetailsScreen = () => {
  const movie = useSelector(state => state.products.selected);
  return (
    <View>
      <Text>{movie.name}</Text>
      <Text>{movie.description2}</Text>
      <Text>Duracion:{movie.minutes}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
