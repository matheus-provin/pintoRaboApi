import { IDrink } from "@/interfaces/IDrink";

export function drinksFactory(response: any): IDrink[] {
  return response.data.drinks;
}
