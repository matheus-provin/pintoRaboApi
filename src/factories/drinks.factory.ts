import { IDrink } from "../interfaces/drink.interface";

export function drinksFactory(response: any): IDrink[] {
  return response.data.drinks;
}
