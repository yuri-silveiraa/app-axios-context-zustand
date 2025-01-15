import { StyleSheet, Text, View } from "react-native";
import { Button } from "../../components/button";
import { useState } from "react";
import axios from "axios";

export default function Screen() {

    const [movieCount, setMovieCount] = useState(0)

    const handleClick = async () => {
        const response = await axios.get('https://reactnative.dev/movies.json')
        if (response.status === 200) {
            setMovieCount(response.data.movies.length)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Filmes: {movieCount}</Text>
            <Button title="Carregar" onPress={handleClick} />
        </View>
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