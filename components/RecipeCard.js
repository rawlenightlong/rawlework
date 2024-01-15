import React from "react";
import { View, Text, ScrollView, Button, SafeAreaView} from "react-native";

const RecipeCard = ({recipe}) => {

    const {title, servings, ingredients, instructions} = recipe;

return (
    <ScrollView style={{padding: 10, backgroundColor: "lightblue", width: "85%", borderRadius: 15 }}>
        <View style={{padding: 20}}>
            <Text style={{textAlign: 'center', marginBottom: 15, fontStyle: "italic", fontWeight:"bold"}}>
                {title}
            </Text>

            <Text style={{textAlign: 'center', marginBottom: 10}}>
                Serves: {servings}
            </Text>

            <View style={{margin: 5, marginBottom: 15}}>


                    {ingredients.map((ingredient, index) => <Text style={{textAlign: 'center', margin: 2, fontStyle: "italic"}}>{" ~"}{ingredient}</Text>)}

            </View>

            <Text style={{textAlign: 'center', fontWeight:"bold", marginBottom: 10}}>
                Instructions
            </Text>

            <View style={{}}>
                {/* {instructions} */}
                {instructions.map((instruction) => <Text style={{margin: 8}}>{instruction}</Text>)}
            </View>

            <Button title="Save Recipe" style={{marginBottom: 20, padding: 20}}></Button>
        </View>
    </ScrollView>
)
}

export default RecipeCard