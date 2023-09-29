//TODO: agregar documentacion

export const options = {
  failOnErrors: true,
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Books',
      version: '1.0.0',
      description: 'API Documentation',
    },
  },
  // apis: [
  //   './src/routes/**/*.ts',
  // ], 
  apis: [
    './src/doc/**/*.ts',
  ],
};
