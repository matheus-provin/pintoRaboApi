import { IDrink } from "../Interfaces/IDrink";

export async function getCockTailDbController(): Promise<IDrink[]> {
  const _obj: IDrink[] = [];
  const alphabetArray: string[] = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );

  for (const letter of alphabetArray) {
    // const a = await getCockTailDb(letter);
    const a = getCockTailDb(letter);

    if (a.length > 0) {
      _obj.push(...a);
    }
  }
  console.log(_obj.length, "cocktails");
  return _obj;
}

function getCockTailDb(letter: string) {
  // read the file and store it in a variable
  const data = require("../Assets/CocktailDb/" + letter + ".json");

  // extract the value of the key "drinks" and store it in a variable
  const drinks: IDrink[] = data.drinks;
  return drinks;
}
