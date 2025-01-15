import { StyleSheet, Text, View } from "react-native";
import { Area1 } from "../../components/area1";
import { Area2 } from "../../components/area2";
import { Button } from "../../components/button";
import { useContext, useReducer } from "react";
import { AuthContext } from "../../contexts/auth";
import { ageReducer } from "../../reducers/age";
import { User } from "../../types/user";
import { ThemeContext } from "../../contexts/theme";
import { useCounter } from "../../store/counter";

export default function Screen() {
    const [ageReducerState, ageReducerDispacth] = useReducer(ageReducer, 10)

    const theme = useContext(ThemeContext)
    const auth = useContext(AuthContext)

    const handleClickAgeIncrease = () => {
        ageReducerDispacth({type: 'INCREASE'})
    }

    const handleClickAgeDecrease = () => {
        ageReducerDispacth({type: 'DECREASE'})
    }

    const handleClick = () => {
        const newUser: User = {
            name: 'Yuri',
            email:'yuri@gmail.com'
        }

        auth?.dispatch({
            type: 'SET_USER',
            payload: newUser
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>eu tenho: {ageReducerState} anos</Text>

            <Button title="aumentar idade" onPress={handleClickAgeIncrease}/>
            <Button title="diminuir idade" onPress={handleClickAgeDecrease}/>

            <Text style={styles.h1}>nome: {auth?.data.user?.name}</Text>
            <Area1 />
            <Area2 />

            <Button 
                title="Mudar para Yuri"
                onPress={handleClick}
            />

            <Text>O TEMA É: {theme?.theme}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        backgroundColor: '#000f00f',
    },
    h1: {
        fontSize: 22,
        fontWeight: 'bold',
        margin: 20,
    },
    h2: {
        fontSize: 16,
        margin: 5,
    }
})