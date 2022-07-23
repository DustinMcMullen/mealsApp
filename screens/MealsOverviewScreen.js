import { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data"
import { MealsList } from "../components/MealsList/MealsList";

export const MealsOverviewScreen = ({ route, navigation }) => {
    const categoryId = route.params.categoryId
    const categoryMeals = MEALS.filter((meal) => {return meal.categoryIds.includes(categoryId)})

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find( (category) => category.id === categoryId )?.title;
        navigation.setOptions({
            title: categoryTitle,
        })
    }, [categoryId, navigation]);

    return <MealsList items={categoryMeals} />
}