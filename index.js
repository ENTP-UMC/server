
import mysql from 'mysql';
import {dbconfig} from './config/db.js';
import swaggerUi from 'swagger-ui-express';
import { specs } from './config/swagger.js';
import express from 'express';


const connection = mysql.createConnection(dbconfig);


const app = express();

app.set('port', process.env.PORT || 3000)   // 서버 포트 지정

app.use(express.urlencoded({extended: false}));

//swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


connection.connect();



connection.end();
app.listen(app.get('port'), () => {
  console.log(`Example app listening on port ${app.get('port')}`);
});