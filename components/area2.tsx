import { useContext } from "react"
import { Text, View } from "react-native"
import { AuthContext } from "../contexts/auth"

export const Area2 = () => {

    const auth = useContext(AuthContext)

    return (
        <View>
            <Text>Area 2: {auth?.data.user?.name}</Text>
        </View>
    )
}