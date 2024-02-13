import { IDrink, IIngredient } from "@/interfaces/IDrink";

export function getDrinksWhereIHaveAllIngredients(
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

export function getDrinksWhereIHaveAtLeastOneIngredient(
  cocktails: IDrink[],
  ingredients: string[]
): IDrink[] {
  const matchingCocktails: IDrink[] = cocktails.filter((cocktail: IDrink) => {
    return CheckIfIHaveAnyIngredientsForThisDrink(cocktail, ingredients);
  });

  return matchingCocktails;
}

function CheckIfIHaveAnyIngredientsForThisDrink(
  cocktail: IDrink,
  ingredients: string[]
) {
  return cocktail.ingredients.some((cocktailIngredient: IIngredient) => {
    // if this ingredient is null or empty, then this cocktail is not valid
    if (cocktailIngredient.name === null || cocktailIngredient.name === "")
      return false;

    return ingredients.includes(cocktailIngredient.name);
  });
}
