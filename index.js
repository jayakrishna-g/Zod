const express = require("express");
const apiRoutes = require("./RestApi/index");
const scrapperRoutes = require("./Scrappers/index");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", apiRoutes);

app.use("/scrapper", scrapperRoutes);

app.use(express.static(`${__dirname}/UI/dist/UI`));
app.get("/", (req, res) => res.sendFile(`${__dirname}/UI/dist/UI/index.html`));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
