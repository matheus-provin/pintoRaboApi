export interface IDrink {
  idDrink: number;
  strDrink: string;
  strDrinkAlternate: string | null;
  strTags: string | null;
  strVideo: string | null;
  strCategory: string;
  strIBA: string | null;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES: string | null;
  strInstructionsDE: string | null;
  strInstructionsFR: string | null;
  strInstructionsIT: string | null;
  strInstructionsZH_HANS: string | null;
  strInstructionsZH_HANT: string | null;
  strDrinkThumb: string | null;
  ingredients: IIngredient[];
  strImageSource: string | null;
  strImageAttribution: string | null;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
}

export interface IIngredient {
  id: number | null;
  name: string | null;
  measure: string | null;
}
