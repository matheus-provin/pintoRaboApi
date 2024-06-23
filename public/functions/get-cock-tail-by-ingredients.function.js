"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDrinksWhereIHaveAtLeastOneIngredient = exports.getDrinksWhereIHaveAllIngredients = void 0;
function getDrinksWhereIHaveAllIngredients(cocktails, ingredients) {
    const matchingCocktails = cocktails.filter((cocktail) => {
        return CheckIfIHaveAllIngredientsForThisDrink(cocktail, ingredients);
    });
    return matchingCocktails;
}
exports.getDrinksWhereIHaveAllIngredients = getDrinksWhereIHaveAllIngredients;
function CheckIfIHaveAllIngredientsForThisDrink(cocktail, ingredients) {
    // console.log("cocktail", cocktail, ingredients);
    return cocktail.ingredients.every((cocktailIngredient) => {
        // if this ingredient is null or empty, then this cocktail is not valid
        if (cocktailIngredient.name === null || cocktailIngredient.name === "")
            return false;
        // TODO: make this check case insensitive
        if (ingredients === undefined || ingredients.length === 0)
            return false;
        const iHaveThisIngredient = ingredients.includes(cocktailIngredient.name);
        return iHaveThisIngredient;
    });
}
function getDrinksWhereIHaveAtLeastOneIngredient(cocktails, ingredients) {
    const matchingCocktails = cocktails.filter((cocktail) => {
        return CheckIfIHaveAnyIngredientsForThisDrink(cocktail, ingredients);
    });
    return matchingCocktails;
}
exports.getDrinksWhereIHaveAtLeastOneIngredient = getDrinksWhereIHaveAtLeastOneIngredient;
function CheckIfIHaveAnyIngredientsForThisDrink(cocktail, ingredients) {
    if (cocktail.ingredients === undefined || cocktail.ingredients === null)
        return false;
    return cocktail.ingredients.some((cocktailIngredient) => {
        // if this ingredient is null or empty, then this cocktail is not valid
        if (cocktailIngredient.name === null || cocktailIngredient.name === "")
            return false;
        if (ingredients === undefined ||
            ingredients === null ||
            ingredients.length === 0)
            return false;
        return ingredients.includes(cocktailIngredient.name);
    });
}
