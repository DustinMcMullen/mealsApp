import { useContext } from "react";
import {View, Text, StyleSheet} from 'react-native';
import { useSelector } from "react-redux";

import { MEALS } from "../data/dummy-data";

import { MealsList } from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";

export const FavoritesScreen = ({ navigation }) => {
    // const favoriteMealsCtx = useContext(FavoritesContext);
    // const favoriteMeals = favoriteMealsCtx.ids.map( (favoriteId) => MEALS.find( meal => meal.id === favoriteId ) );
    const favoriteMealsRedux = useSelector((state) => state.favoriteMeals.ids);
    const favoriteMeals = favoriteMealsRedux.map( (favoriteId) => MEALS.find( meal => meal.id === favoriteId ) );

    return (favoriteMeals.length ? 
        <MealsList items={favoriteMeals} />
    : 
        <View style={styles.favoritesTextCont}>
            <Text style={styles.text}>Add favorites to see them here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    favoritesTextCont: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    }
})