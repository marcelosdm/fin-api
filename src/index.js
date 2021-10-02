const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const custumers = [];

/**
 * cpf - string
 * name - string
 * id - uuid
 * statement []
 */
app.post("/account", (request, response) => {
  const { cpf, name } = request.body;

  const custumerAlreadyExists = custumers.some(
    (custumer) => custumer.cpf === cpf
  );

  custumerAlreadyExists && response.status(400).json({error: "Custumer already exists"})


  custumers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: [],
  });

  return response.status(201).send();
});

app.listen(3333);
