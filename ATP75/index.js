import ClienteApi from "./api/ClienteApi";
import Express  from "express";
import bodyParser from "body-parser";

const api = Express();
api.use(bodyParser.json());
api.listen(3000, ()=>console.log("Aplicação rodando"));
api.use('/api/cliente', ClienteApi);
