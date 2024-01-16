const express = require("express");
// const axios = require("axios"); // Import the axios library

const app = express();
const port = 3000;
// let obj: IDrink[] = [];

app.get("/", async (req: any, res: { send: (arg0: string) => void }) => {
  // obj = await getCockTailDbController();

  res.send("Hellooooo World!");
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
