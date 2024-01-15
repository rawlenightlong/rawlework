import { TextInput, Button, View } from "react-native";
import React from "react";
import { useState } from "react";
import {Form} from 'react'



const IngredientsInput = ({setIngredients, ingredients, getRecipe}) => {

    return ( <>

    <TextInput
    style={
        {   margin: 5,
            borderColor: '#1976d2',
            borderWidth: 2,
            borderRadius: 10,
            width: '85%',
            padding: 10, 
            textAlign: 'center',
            color: "black",
            backgroundColor: "white",
        }
    }
    onChangeText={setIngredients}
    value={ingredients}
    placeholder='Add your ingredients here!'
    placeholderTextColor="black"
    />

    <View style={{backgroundColor: "#1976d2", borderRadius: 10, padding: 2, marginBottom: 5}}><Button title="Get Recipe!" onPress={getRecipe} color="white" backgroundColor="#1976d2" borderColor="red">!</Button></View>


  </>  )
}

export default IngredientsInput;