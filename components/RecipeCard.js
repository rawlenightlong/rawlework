import React from "react";
import { View, Text, ScrollView, Button, SafeAreaView} from "react-native";

const RecipeCard = ({recipe}) => {

    const {title, servings, ingredients, instructions} = recipe;
    
return (
    <ScrollView style={{padding: 10, backgroundColor: "#1976d2", width: "85%", borderRadius: 15, height: "70%" }}>



        <View style={{padding: 15, alignItems: "center"}}>
            <Text style={{textAlign: 'center', marginBottom: 15, fontStyle: "italic", fontWeight:"bold", color: "white"}}>
                {title}
            </Text>

            <Text style={{textAlign: 'center', marginBottom: 10, color: "white"}}>
                Serves: {servings}
            </Text>

            <View style={{margin: 5, marginBottom: 15}}>


                    {ingredients.map((ingredient, index) => <Text style={{textAlign: 'center', margin: 2, fontStyle: "italic", color: "white"}}>{" ~"}{ingredient}</Text>)}

            </View>

            <Text style={{textAlign: 'center', fontWeight:"bold", marginBottom: 10, color: "white", fontStyle: "italic", textDecorationLine: "underline"}}>
                Instructions
            </Text>

            <View style={{marginBottom:10}}>
                {/* {instructions} */}
                {instructions.map((instruction) => <Text style={{margin: 8, color: "white"}}>{instruction}</Text>)}
            </View>

            <View style={{display: "flex", backgroundColor: "#1976d2", width: "50%", alignItems: "center", borderRadius: 10, borderColor: "white", borderWidth: "1px"}}>
                <Button title="Save Recipe" color={"white"}></Button>
            </View>

        </View>
    </ScrollView>
)
}

export default RecipeCard