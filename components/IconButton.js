import { Pressable, Text, Button, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export const IconButton = ({icon, color, pressHandler}) => {

    return (
        <Pressable onPress={pressHandler} style={ ({pressed}) => [styles.iconButton, pressed && styles.pressed] }>
            <Ionicons name={icon} size={32} color={color} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    iconButton: {
        marginBottom: 10
    },
    pressed: {
        opacity: 0.2
    }
})