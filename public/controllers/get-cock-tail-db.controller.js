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
exports.getCockTailDbController = void 0;
function getCockTailDbController() {
    return __awaiter(this, void 0, void 0, function* () {
        const _obj = [];
        const alphabetArray = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
        for (const letter of alphabetArray) {
            // const a = await getCockTailDb(letter);
            const a = getCockTailFromFiles(letter);
            if (a.length > 0) {
                _obj.push(...a);
            }
        }
        return _obj;
    });
}
exports.getCockTailDbController = getCockTailDbController;
function getCockTailFromFiles(letter) {
    // read the file and store it in a variable
    const data = require("../assets/cock-tail-db/" + letter + ".json");
    // extract the value of the key "drinks" and store it in a variable
    const drinks = drinkFactory(data.drinks);
    return drinks;
}
function drinkFactory(drinkUnformatted) {
    if (drinkUnformatted === null || (drinkUnformatted === null || drinkUnformatted === void 0 ? void 0 : drinkUnformatted.length) === 0) {
        return [];
    }
    let formattedDrinks = [];
    drinkUnformatted.forEach((element) => {
        var _a;
        let formattedDrink = Object.assign({ idDrink: -1, strDrink: "", strDrinkAlternate: "", strTags: "", strVideo: "", strCategory: "", strIBA: "", strAlcoholic: "", strGlass: "", strInstructions: "", strInstructionsES: "", strInstructionsDE: "", strInstructionsFR: "", strInstructionsIT: "", strInstructionsZH_HANS: "", strInstructionsZH_HANT: "", strDrinkThumb: "", ingredients: [], strImageSource: "", strImageAttribution: "", strCreativeCommonsConfirmed: "", dateModified: "" }, element);
        ingredientsFactory(element, formattedDrink);
        formattedDrink.strDrink = (_a = formattedDrink.strDrink) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        formattedDrinks.push(formattedDrink);
    });
    return formattedDrinks;
}
function ingredientsFactory(element, formattedDrink) {
    let continueLoop = true;
    let index = 1;
    while (continueLoop) {
        let ingredient = "";
        let measure = "";
        if ("strIngredient" + index in element) {
            ingredient = element["strIngredient" + index];
        }
        if ("strMeasure" + index in element) {
            measure = element["strMeasure" + index];
        }
        if ((ingredient === "" || ingredient === null) &&
            (measure === "" || measure === null)) {
            continueLoop = false;
            break;
        }
        formattedDrink.ingredients.push({
            id: null,
            name: ingredient === null || ingredient === void 0 ? void 0 : ingredient.toLowerCase(),
            measure: measure === null || measure === void 0 ? void 0 : measure.toLowerCase(),
        });
        index++;
    }
}
