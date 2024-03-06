import axios from "axios";
import { drinksFactory } from "../factories/drinksFactory";

export async function getCockTailDb(letter: string = "a") {
  try {
    const response = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + letter
    );

    return drinksFactory(response);
  } catch (error: any) {
    // Handle errors if the API call fails
    console.error("Error fetching drinks from API:", error?.message);
    return [];
  }
}
