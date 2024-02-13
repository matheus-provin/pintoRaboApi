"use client";

import { getCockTailDbController } from "@/controllers/GetCockTailDb.controller";
import { getDrinksWhereIHaveAllIngredients } from "@/functions/GetCockTailByIngredients";
import { IDrink } from "@/interfaces/IDrink";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";

let obj: IDrink[] = [];

async function start() {
  if (obj.length === 0) {
    obj = await getCockTailDbController();
  }
}

export default function Home() {
  const searchParams = useSearchParams();

  const ingredients = searchParams.getAll("ingredients");

  const cocktails = getDrinksWhereIHaveAllIngredients(
    obj,
    ingredients as string[]
  );

  console.log("Ingredients:", ingredients, cocktails);

  start();
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>with the following ingredients: </p>
        <p>{ingredients.join(", ")} </p>
        <p>you can make the following cocktails: </p>
        <p>{cocktails.map((c) => c.strDrink).join(", ")}</p>
      </div>
    </main>
  );
}
