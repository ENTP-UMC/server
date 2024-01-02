import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
const options = {
    definition: {
        info: {
            title: 'UMC Study API',
            version: '1.0.0',
            description: 'UMC Study API with express, API 설명'
        },
        host: 'hakerton3-env.eba-sf3fm2mf.ap-northeast-2.elasticbeanstalk.com',
        basePath: '/'
    },
    apis: ['./src/routes/*.js', './swagger/*']
};


export const specs = swaggerJsdoc(options);