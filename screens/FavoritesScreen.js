import { useContext } from "react";

import { MEALS } from "../data/dummy-data";

import { MealsList } from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";

export const FavoritesScreen = ({ navigation }) => {
    const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMeals = favoriteMealsCtx.ids.map( (favoriteId) => MEALS.find( meal => meal.id === favoriteId ) );

    return <MealsList items={favoriteMeals} />
}