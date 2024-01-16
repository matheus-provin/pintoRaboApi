import { IDrink } from "../Interfaces/IDrink";

export function drinksFactory(response: any): IDrink[] {
  return response.data.drinks;
}
