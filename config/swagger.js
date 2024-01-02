import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'

const options = {
    swaggerDefinition: {
        info:{
            title : 'Test API',
            version: '1.0.0',
            description: 'Test API with express',
        },
        host:'localhost:3300',
        basePath: '/'
    },
    apis:['./routes/*js','./swagger/*']
};

export const specs = swaggerJSDoc(options);

