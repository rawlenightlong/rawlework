import { TextInput, Button } from "react-native";
import React from "react";
import { useState } from "react";
import {Form} from 'react'



const IngredientsInput = ({setIngredients, ingredients, getRecipe}) => {

    return ( <>

    <TextInput
    style={
        {   margin: 5,
            borderColor: 'black',
            borderWidth: 2,
            borderRadius: 10,
            width: '85%',
            padding: 10, 
            textAlign: 'center'

        }
    }
    onChangeText={setIngredients}
    value={ingredients}
    placeholder='Enter your ingredients here!'
    />


    <Button title="Get Recipe!" onPress={getRecipe}>!</Button>

  </>  )
}

export default IngredientsInput;