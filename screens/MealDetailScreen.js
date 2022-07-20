import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";

import { MEALS } from "../data/dummy-data"
import { MealDetails } from "../components/MealDetails";
import { Subtitle } from "../components/MealDetail/Subtitle";
import { List } from "../components/MealDetail/List";

export const MealDetailScreen = ({route, navigation}) => {
    const mealId = route.params.mealId;
    const meal = MEALS.find( (meal) => meal.id === mealId );

    useLayoutEffect(() => {
        const mealTitle = MEALS.find( (meal) => meal.id === mealId )?.title;
        navigation.setOptions({
            title: mealTitle,
        })
    }, [mealId, navigation]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{uri: meal.imageUrl}} style={styles.mealImage} />
            <Text style={styles.title}>{meal.title}</Text>
            <View>
            <MealDetails
                duration={meal.duration}
                complexity={meal.complexity}
                affordability={meal.affordability}
                textStyle={styles.detailText}
            />
            </View>
            <View style={styles.listOutterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={meal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={meal.steps} /> 
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    mealImage: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "white",
    },
    detailText: {
        color: "white"
    },
    listOutterContainer: {
        alignItems: "center"
    },
    listContainer: {
        width: "90%",
    },
})