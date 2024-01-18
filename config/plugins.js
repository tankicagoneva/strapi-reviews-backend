module.exports = {
    graphql: {
      config: {
        endpoint: "/graphql",
        shadowCRUD: true,
        playgroundAlways: true,
        introspection: true,
        depthLimit: 10,
        amountLimit: 100,
        apolloServer: {
          tracing: false,
        },
      },
    },
  };
  