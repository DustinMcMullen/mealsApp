import { View, FlatList, StyleSheet } from "react-native";
import { MealItem } from "./MealItem";


export const MealsList = ({ items }) => {
    function renderMeal (itemData) {
        let item = itemData.item;

        return (
            <MealItem
                id={item.id}
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
                data={items}
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