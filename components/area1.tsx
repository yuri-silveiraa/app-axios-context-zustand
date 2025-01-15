import { Text, View } from "react-native"
import { AuthContext } from "../contexts/auth"
import { useContext } from "react"

export const Area1 = () => {
    
    const auth = useContext(AuthContext)

    return (
        <View>
            <Text>Area 1: {auth?.data.user?.name}</Text>
        </View>
    )
}