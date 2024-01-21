import { getCockTailDbController } from "./Controllers/GetCockTailDbController";
import { getCocktailByIngredientsName } from "./Functions/GetCockTailByIngredients";
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
  const b = getCocktailByIngredientsName(obj, [
    "Dark rum",
    "Peach nectar",
    "Orange juice",
  ]);
  console.log(b.length, b[0], "getCocktailByIngredientsName");

  res.send("Hellooooo World! \nQtd:" + obj.length);
});

app.get("/GetDrinksByIngredient", async (req: any, res: any) => {
  await start();

  const { ingredients } = req.query;

  const cocktails = getCocktailByIngredientsName(obj, ingredients);

  console.log("Ingredients:", ingredients, cocktails);

  //RES.SEnd as json
  res.send(cocktails);
});
