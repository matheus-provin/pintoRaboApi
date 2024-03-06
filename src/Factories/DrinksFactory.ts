import { IDrink } from "../interfaces/iDrink";

export function drinksFactory(response: any): IDrink[] {
  return response.data.drinks;
}
