import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { Children } from "react/cjs/react.production.min";

export const Subtitle = ({children}) => {

    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subTitle}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    subtitleContainer: {
        padding: 6,
        marginVertical: 4,
        marginHorizontal: 12,
        borderBottomColor: "#e2b497",
        borderBottomWidth: 2,
    },
    subTitle: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        color: "#e2b497",
    },
})