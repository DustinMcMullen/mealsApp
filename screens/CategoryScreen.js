import { FlatList, StyleSheet } from "react-native";
import { CategoryGridTile } from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";

export const CategoryScreen = ({navigation}) => {
    
    function renderCategoryItem (itemData) {

        const meal = itemData.item;

        function pressHandler () {
            navigation.navigate("MealsOverview", {
                categoryId: itemData.item.id,
                title: meal.title
            })
        }

        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                handlePress={pressHandler}
            />
        );
    }

    return (
        <FlatList
            data={CATEGORIES}
            numColumns={2}
            renderItem={renderCategoryItem}
            keyExtractor={item => item.id}
        />
    );
}

const styles = StyleSheet.create({

})