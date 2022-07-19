import { View, Text, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";

import { MEALS } from "../data/dummy-data"

export const MealDetailScreen = ({route, navigation}) => {
    const mealId = route.params.mealId;
    const title = route.params.title

    useLayoutEffect(() => {
        const mealTitle = MEALS.find( (meal) => meal.id === mealId )?.title;
        navigation.setOptions({
            title: mealTitle,
        })
    }, [mealId, navigation]);

    return (
        <View>
            <Text>This is the {title} meal</Text>
        </View>
    )
}