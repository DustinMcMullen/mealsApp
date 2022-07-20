import {View, Text, StyleSheet, Pressable, Image, Platform} from 'react-native';

import { MealDetails } from './MealDetails';

export const MealItem = ({ title, imageUrl, duration, complexity, affordability, handlePress }) => {
    return (
        <View style={styles.mealContainer}>
            <Pressable style={ ({pressed}) => [
                styles.mealButton,
                pressed && styles.mealButtonPressed 
            ] }
            onPress={handlePress}
            >
                <View>
                    <Image style={styles.mealImage} source={{uri: imageUrl}} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails
                    duration={duration}
                    complexity={complexity}
                    affordability={affordability}
                />

            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealContainer: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: .25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    mealButton: {
        flex: 1,
        borderRadius: 8,
        overflow: 'hidden',
    },
    mealButtonPressed: {
        opacity: 0.75
    },
    mealImage: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
})