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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCockTailDb = void 0;
const axios_1 = __importDefault(require("axios"));
const drinks_factory_1 = require("../factories/drinks.factory");
function getCockTailDb() {
    return __awaiter(this, arguments, void 0, function* (letter = "a") {
        try {
            const response = yield axios_1.default.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + letter);
            return (0, drinks_factory_1.drinksFactory)(response);
        }
        catch (error) {
            // Handle errors if the API call fails
            console.error("Error fetching drinks from API:", error === null || error === void 0 ? void 0 : error.message);
            return [];
        }
    });
}
exports.getCockTailDb = getCockTailDb;
