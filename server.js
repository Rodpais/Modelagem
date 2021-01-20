/*jshint esversion: 6 */

const express = require('express');
const app = express();
const data = require("./data.json");
app.use(express.json());

// verbos HTTP

//GET: Receber dados de um resource
// POST: Enviar dados ou informações para serem processados por um resource
// PUT: atualizar dados de um resource
// DELETE: deletar um resource

// http://localhost:3000/clients  clients é o resource.

app.get("/clients", function (req, res) {
    res.json(data);
});


app.get("/clients/:id", function (req, res) {
    const { id } = req.params;
    const client = data.find(cli ==> cli.id == id);

    if (!client) return res.status(204).json;

    res.json(client);
});

app.post("/clients", function(req, res){});
app.put("/clients/:id", function(req, res){});
app.delete("/clients/:id", function(req, res){});


app.listen(3000, function () {
    console.log("server is running");
});