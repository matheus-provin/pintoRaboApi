import { IDrink, IIngredient } from "../Interfaces/IDrink";

export function getCocktailByIngredientsName(
  cocktails: IDrink[],
  ingredients: string[]
): IDrink[] {
  const matchingCocktails: IDrink[] = cocktails.filter((cocktail: IDrink) => {
    return CheckIfIHaveAllIngredientsForThisDrink(cocktail, ingredients);
  });

  return matchingCocktails;
}

function CheckIfIHaveAllIngredientsForThisDrink(
  cocktail: IDrink,
  ingredients: string[]
) {
  return cocktail.ingredients.every((cocktailIngredient: IIngredient) => {
    // if this ingredient is null or empty, then this cocktail is not valid
    if (cocktailIngredient.name === null || cocktailIngredient.name === "")
      return false;

    // TODO: make this check case insensitive
    const iHaveThisIngredient = ingredients.includes(cocktailIngredient.name);

    return iHaveThisIngredient;
  });
}
