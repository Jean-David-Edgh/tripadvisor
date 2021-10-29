const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");
const axios = require("axios");
// require("dotenv").config();

// Package mailgun
// const mailgun = require("mailgun-js")({
//   apiKey: process.env.MAILGUN_API_KEY,
//   domain: process.env.MAILGUN_DOMAIN,
// });

const app = express();
app.use(formidable());
app.use(cors());

app.post("/form", (req, res) => {
  console.log(req.fields);
  // Objet DATA avec les infos
  const dataMailgun = {
    from: `${req.fields.firstname} ${req.fields.lastname}  <${req.fields.email}>`,
    to: "jd.edighoffer@gmail.com",
    subject: "Formulaire rempli",
    text: `${req.fields.message}`,
  };
});

// document.addEventListener("DOMContentLoaded", () => {

// });

//   Fonctions fournies par le package mailgun pour créer le mail et l'envoyer :
//   mailgun.messages().send(data, (error, body) => {
//     console.log(body);
//     console.log(error);

//     if (error === undefined) {
//       res.json({ message: "Données du form bien reçues, mail envoyé." });
//     } else {
//       res.json(error);
//     }
//   });
// });

//   app.get("/", (req, res) => {
//     console.log("Route /");
//     res.json({ message: "Bienvenue sur mon serveur dédié au formulaire" });
//   });

app.all("*", (req, res) => {
  res.json({ message: "All routes" });
});

app.listen(3000, () => {
  console.log("Server started");
});
