const express = require("express");

const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:8100"
}

const app = express();

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize.sync().then(() => {
  console.log("dabase already synced")
})

app.get("/", (req, res) => {
  res.json({
    message: "Hola Holita"
  })
});

require("./routes/shop.routes.js")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`El servidor ha arrancado en el puerto ${PORT}`)
})





