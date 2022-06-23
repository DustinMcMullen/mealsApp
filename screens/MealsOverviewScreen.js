import { View, FlatList, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data"
import {MealItem} from "../components/MealItem"

export const MealsOverviewScreen = ({ route, navigation }) => {

    const categoryId = route.params.categoryId
    const categoryMeals = MEALS.filter((meal) => {return meal.categoryIds.includes(categoryId)})

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find( (category) => category.id === categoryId )?.title;
        navigation.setOptions({
            title: categoryTitle,
        })
    }, [categoryId, navigation])

    function renderMeal (itemData) {
        let item = itemData.item;
        return (
            <MealItem
                title={item.title}
                imageUrl={item.imageUrl}
                duration={item.duration}
                complexity={item.complexity}
                affordability={item.affordability}
            />
        )
    }

    return(
        <View style={styles.mainContainer}>
            <FlatList
                data={categoryMeals}
                renderItem={renderMeal}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 16
    },
})