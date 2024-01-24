import { getCockTailDbController } from "./Controllers/GetCockTailDbController";
import {
  getDrinksWhereIHaveAllIngredients,
  getDrinksWhereIHaveAtLeastOneIngredient,
} from "./Functions/GetCockTailByIngredients";
import { IDrink } from "./Interfaces/IDrink";

const express = require("express");
// const axios = require("axios"); // Import the axios library

const app = express();
const port = 3000;
let obj: IDrink[] = [];

async function start() {
  if (obj.length === 0) {
    obj = await getCockTailDbController();
  }
}

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

app.get("/", async (req: any, res: { send: (arg0: string) => void }) => {
  await start();

  // console.log(obj.length, obj[0], "cocktails");
  const b = getDrinksWhereIHaveAllIngredients(obj, [
    "Dark rum",
    "Peach nectar",
    "Orange juice",
  ]);
  console.log(b.length, b[0], "getCocktailByIngredientsName");

  res.send(
    "Drinks Loaded:" +
      obj.length +
      "/nRoutes = \n/GetDrinksByIngredient/AllIngredients \nAnd \n/GetDrinksByIngredient/SomeIngredients"
  );
});

app.get("/GetDrinksByIngredient/AllIngredients", async (req: any, res: any) => {
  await start();

  const { ingredients } = req.query;

  const cocktails = getDrinksWhereIHaveAllIngredients(obj, ingredients);

  console.log("Ingredients:", ingredients, cocktails);

  res.send(cocktails);
});

app.get(
  "/GetDrinksByIngredient/SomeIngredients",
  async (req: any, res: any) => {
    await start();

    const { ingredients } = req.query;

    const cocktails = getDrinksWhereIHaveAtLeastOneIngredient(obj, ingredients);

    console.log("Ingredients:", ingredients, cocktails);

    res.send(cocktails);
  }
);
