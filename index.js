const express = require("express");
const path = require("path"); // importa o Path
const routes = require("./routes/routes"); //importa as rotas

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); //identifica que os arquivos dos projetos estão na pasta public, css/js etc
app.use(routes);
app.listen(port, () =>
  console.log(`Server Running in http://localhost:${port}`)
);
