import { View, Text, Image, StyleSheet, FlatList } from "react-native";

export const List = ({data}) => {

    return data.map( (dataPoint) => (
        <View style={styles.listItem} key={dataPoint}>
            <Text style={styles.listText}>{dataPoint}</Text>
        </View>
    ) )
}

const styles = StyleSheet.create({
    listItem: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        borderRadius: 6,
        backgroundColor: "#e2b497",
    },
    listText: {
        color: "#351401",
        textAlign: "center"
    }
})