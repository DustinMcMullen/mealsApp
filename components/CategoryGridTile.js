import {Pressable, StyleSheet, Text, View, Platform} from "react-native";

export const CategoryGridTile = ({title, color, handlePress}) => {
    return (
        <View style={styles.mainContainer}>
            <Pressable
                android_ripple={{color: "#ccc"}}
                style={ ({pressed}) => [
                    styles.categoryButton,
                    pressed ? styles.categoryButtonPressed : null
                ] }
                onPress={handlePress}
            >
                <View style={[styles.innerContainer, {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: .25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    categoryButton: {
        flex: 1,
    },
    categoryButtonPressed: {
        opacity: 0.75,

    },
    innerContainer: {
        flex: 1,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    }
})