"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_cock_tail_db_controller_1 = require("../controllers/get-cock-tail-db.controller");
const get_cock_tail_by_ingredients_function_1 = require("../functions/get-cock-tail-by-ingredients.function");
const express = require("express");
// const axios = require("axios"); // Import the axios library
const app = express();
const port = 3000;
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0, get_cock_tail_db_controller_1.getCockTailDbController)();
    });
}
app.use(express.static("public"));
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let obj = yield start();
    // console.log(obj.length, obj[0], "cocktails");
    const b = (0, get_cock_tail_by_ingredients_function_1.getDrinksWhereIHaveAllIngredients)(obj, [
        "Dark rum",
        "Peach nectar",
        "Orange juice",
    ]);
    console.log(b.length, b[0], "getCocktailByIngredientsName");
    res.send("Drinks Loaded:" +
        obj.length +
        "/nRoutes = \n/GetDrinksByIngredient/AllIngredients \nAnd \n/GetDrinksByIngredient/SomeIngredients");
}));
app.get("/GetDrinksByIngredient/AllIngredients", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let obj = yield start();
    const { ingredients } = req.query;
    const cocktails = (0, get_cock_tail_by_ingredients_function_1.getDrinksWhereIHaveAllIngredients)(obj, ingredients);
    console.log("Ingredients:", ingredients, cocktails);
    res.send(cocktails);
}));
app.get("/GetDrinksByIngredient/SomeIngredients", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let obj = yield start();
    const { ingredients } = req.query;
    const cocktails = (0, get_cock_tail_by_ingredients_function_1.getDrinksWhereIHaveAtLeastOneIngredient)(obj, ingredients);
    console.log("Ingredients:", ingredients, cocktails);
    res.send(cocktails);
}));
app.listen(port, () => console.log("Server ready on port 3000."));
module.exports = app;
