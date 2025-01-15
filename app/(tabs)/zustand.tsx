import { StyleSheet, Text, View } from "react-native";
import { Button } from "../../components/button";
import { useCounter } from "../../store/counter";

export default function Screen() {
    const count = useCounter()

    const handClick = () => {
        count.setCount(50)
    }

    return (
        <View style={styles.container}>
            <Text>CONTAGEM: {count.count}</Text>
            <Button title="Incrementar" onPress={count.increment} />
            <Button title="Decrementar" onPress={count.decrement} />
            <Button title="setar 50" onPress={handClick} />
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