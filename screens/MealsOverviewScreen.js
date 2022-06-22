import { View, FlatList, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data"
import {MealItem} from "../components/MealItem"

export const MealsOverviewScreen = ({ route }) => {

    const categoryId = route.params.categoryId
    const categoryMeals = MEALS.filter((meal) => {return meal.categoryIds.includes(categoryId)})

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