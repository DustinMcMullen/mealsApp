import {View, Text, StyleSheet} from 'react-native';

export const MealDetails = ({duration, complexity, affordability, textStyle = null}) => {

    return(
        <View style={styles.details}>
            <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
            <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8, 
    },
    detailItem: {
        marginHorizontal: 6,
        fontSize: 12
    }
})