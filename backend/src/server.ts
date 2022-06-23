import express from "express";
import path from "path";
import cors from "cors";
import routes from "./routes";

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistemas "/users"

// GET: Buscar uma ou mais informações do back-end 
// POST: Criar uma nova informação no back-end 
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// POST https://localhost:3333/users = Criar um usuário
// GET https://localhost:3333/users = Listar usuários
// GET https://localhost:3333/users/5 = Buscar dados do usuário com ID 5

// Request Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação
// Reuqest Body: Parâmetros para criação/atualização de informações

// SELECT * FROM users WHERE name = "Kauê"
// knex("users").where("name", "Kauê").select("*")

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.listen(3333);