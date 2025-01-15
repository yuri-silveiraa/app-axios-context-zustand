import { Tabs } from 'expo-router'
import { FontAwesome } from "@expo/vector-icons"; 
import { Providers } from '../../contexts/providers';

export default function RootLayout() {
    return (
        <Providers>
            <Tabs screenOptions={{headerShown: false}}>
                <Tabs.Screen 
                    name="index" 
                    options={{
                        title: "GET",
                        tabBarIcon: ({ color }) => <FontAwesome
                                        size={26}
                                        name="get-pocket"
                                        color={color}
                                    />
                    }} />
                <Tabs.Screen 
                    name="post" 
                    options={{
                        title: "POST",
                        tabBarIcon: ({ color }) => <FontAwesome
                                        size={26}
                                        name="arrow-up"
                                        color={color}
                                    />
                    }} 
                    />
                <Tabs.Screen 
                    name="context" 
                    options={{
                        title: "CONTEXT",
                        tabBarIcon: ({ color }) => <FontAwesome
                                        size={26}
                                        name="anchor"
                                        color={color}
                                    />
                    }} 
                    />
            </Tabs>
        </Providers>
    )
}