import { getCockTailDbController } from "../controllers/get-cock-tail-db.controller";
import {
  getDrinksWhereIHaveAllIngredients,
  getDrinksWhereIHaveAtLeastOneIngredient,
} from "../functions/get-cock-tail-by-ingredients.function";
import { IDrink } from "../interfaces/drink.interface";

// const axios = require("axios"); // Import the axios library
const express = require("express");

const app = express();

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

async function start(): Promise<IDrink[]> {
  return await getCockTailDbController();
}

app.use(express.static("public"));

app.get("/", async (req: any, res: { send: (arg0: string) => void }) => {
  let obj: IDrink[] = await start();

  // console.log(obj.length, obj[0], "cocktails");
  const b = getDrinksWhereIHaveAllIngredients(obj, [
    "Dark rum",
    "Peach nectar",
    "Orange juice",
  ]);
  // console.log(b.length, b[0], "getCocktailByIngredientsName");

  res.send(
    "Drinks Loaded:" +
      obj.length +
      "/nRoutes = \n/GetDrinksByIngredient/AllIngredients \nAnd \n/GetDrinksByIngredient/SomeIngredients"
  );
});

app.get("/GetDrinksByIngredient/AllIngredients", async (req: any, res: any) => {
  let obj: IDrink[] = await start();

  const { ingredients } = req.query;

  const cocktails = getDrinksWhereIHaveAllIngredients(obj, ingredients);

  // console.log("Ingredients:", ingredients, cocktails);

  res.send(cocktails);
});

app.get(
  "/GetDrinksByIngredient/SomeIngredients",
  async (req: any, res: any) => {
    let obj: IDrink[] = await start();

    const { ingredients } = req.query;

    const cocktails = getDrinksWhereIHaveAtLeastOneIngredient(obj, ingredients);

    // console.log("Ingrkedients:", ingredients, cocktails);

    res.send(cocktails);
  }
);

module.exports = app;
