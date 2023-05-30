import { FlatList, StyleSheet, View } from "react-native";
import MovieItem from "../components/MovieItem";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filteredMovied, selectedMovie } from "../store/actions/products.action";

const MoviesScreen = ({ navigation}) => {
  const filteredMovies = useSelector(state => state.movies.filteredMovie);
  const categorySelected = useSelector(state => state.categories.selected);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(filteredMovied(categorySelected.id));
  },[])

  const handleSelectedReco = item => {
    dispatch(selectedMovie(item.id));
    navigation.navigate("Details", {
      product: item,
      name: item.name,
    });
  };

  const renderMovieItem = ({ item }) => (
    <View style={styles.productItem}>
      <MovieItem item={item} onSelected={handleSelectedReco} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredMovies}
        renderItem={renderMovieItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default MoviesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productItem: {
    margin: 20,
    height: 400,
    width: 150,
  },
});
