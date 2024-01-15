import React from "react"
import { View, Text } from "react-native"

export default function Nav(){
    return (
        <View style={{width:"100%", backgroundColor: "#1976d2", height: 20, justifyContent: 'center',}}>
            <Text style={{textAlign: 'center', color: "white", fontWeight: "bold"}}>
                Sous Chef
            </Text>
        </View>
    )
}