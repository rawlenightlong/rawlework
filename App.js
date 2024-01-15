import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';
import IngredientsInput from './components/IngredientsInput';
import { useState } from 'react';
import RecipeCard from './components/RecipeCard';
import Nav from './components/Nav';

export default function App() {

  const [ingredients, setIngredients ] = useState("")
  const [ingredientList, setIngredientList] = useState('')
  const [recipe, setRecipe] = useState({
      title: '',
      servings: '',
      ingredients: [],
      instructions: []
  })
  const [isLoading, setIsLoading] = useState(1)

  const getRecipe = async function getRecipe(e){
    e.preventDefault()
    setIngredientList(ingredients)
    setIsLoading(2)
    const response = await fetch('https://souschefai.onrender.com/api/recipes', {
      method: 'POST',
      body: ingredients
    })
    const gptrecipe = await response.json()
    const jsonrecipe = JSON.parse(gptrecipe)

    if (jsonrecipe){
      setIsLoading(3)
      setRecipe({...jsonrecipe})
      setIngredients('')
    }
  }


  return (
    <SafeAreaView style={styles.page}>
      <Nav/>
      <View style={styles.container}>
        <View style={{marginTop: 10, padding: 10, backgroundColor: "#1976d2", width: "85%", borderRadius: 20 }}>
          <Text style={
            { textAlign: 'center', color: "white"}}>
          Welcome to Sous Chef AI, a simple, ChatGPT-powered recipe generator for all your culinary needs! Enter a comma-separated list of what you've got lying around at home, and get inspired!
          </Text>
        </View>
        
        <IngredientsInput setIngredients={setIngredients} ingredients={ingredients} getRecipe={getRecipe}/>

        {isLoading===2 && recipe ? <Text style={{color: "white"}}>building your recipe... <ActivityIndicator/></Text> : null}
        {isLoading===3 && recipe ? <RecipeCard recipe={recipe}/> : null}  

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  page: {
    flex: 1,
    backgroundColor: 'black',
  }
});
