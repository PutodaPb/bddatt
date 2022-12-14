import express, { request, response } from 'express';

import swaggerUi from 'swagger-ui-express';


import { router } from './routes';

import swaggerFile from '../src/swagger.json'

import "./database";

const app = express();  

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
    
app.use(express.json());

app.use(router);

app.listen(3333, () => console.log("Server is run!"));