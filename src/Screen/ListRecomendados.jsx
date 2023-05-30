import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './ListRecomendados/Styles'
import CategoriesItem from '../components/CategoriesItem'
import { selectedCategory } from '../store/actions/category.action'


import { useSelector, useDispatch } from 'react-redux';


const ListRecomendados = ({navigation}) => {
  const categories = useSelector(state => state.categories.movieCategories);
  const dispatch = useDispatch();
  
  const handleSelectedCategory = item =>{
    dispatch(selectedCategory(item.id));
    navigation.navigate("Products",{
      name: item.title,

    });
  };

  const redenCategoriesItem = ({item}) => (
    <View style={styles.categoriesContainer}>
      <CategoriesItem item={item} onSelected={handleSelectedCategory}/>
    </View>
  );
  return (
<View style={styles.container}>          
          
          <FlatList
          data={categories}
          renderItem={redenCategoriesItem}
          keyExtractor={item => item.id}
          />
        </View>
  )
}

export default ListRecomendados

