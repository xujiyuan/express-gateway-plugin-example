module.exports = {
  name: 'testpolicy',
  policy: (actionParams) => {
    return (req, res, next) => {
      console.log('executing policy example with params', actionParams)
    }
  },
  schema: { // This is for Admin API to validate params
    $id: "http://express-gateway.io/models/applications.json",
    type: 'object'
  }
}
