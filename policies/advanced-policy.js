module.exports = pluginContext => {
  return {
    name: 'exampleWithContext',
    policy: (actionParams) => {
      return (req, res, next) => {
        console.log('executing policy exampleWithContext with params and context', actionParams, pluginContext)
      }
    },
    schema: { // This is for Admin API to ask about params
      $id: "http://express-gateway.io/models/applications.json",
      type: 'object'
    }
  }
}
