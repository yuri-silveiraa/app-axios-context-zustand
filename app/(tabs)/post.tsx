import { StyleSheet, Text, View } from "react-native";
import { Button } from "../../components/button";
import { useState } from "react";
import { Post } from "../../types/user";
import { req } from "../../libs/axios";

export default function Screen() {

    const [post, setPost] = useState<Post>()

    const handleClick = async () => {
        const response = await req.post('/posts',{
                title: 'POST NOVO',
                body: 'Corpo do novo post'
            }
        )
        if (response.status === 201) {
            setPost(response.data)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>NOVO POST</Text>
            <Button title="Novo Post" onPress={handleClick} />
            <Text style={styles.h2}>{post?.title}</Text>
            <Text style={styles.h2}>{post?.body}</Text>
            <Text style={styles.h2}>{post?.userId}</Text>
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