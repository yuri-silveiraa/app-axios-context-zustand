import { StyleSheet, Text, View } from "react-native";
import { Button } from "../../components/button";

export default function Screen() {
    return (
        <Text></Text>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000f00f',
    },
    h1: {
        fontSize: 22,
        fontWeight: 'bold',
        margin: 20,
    }
})