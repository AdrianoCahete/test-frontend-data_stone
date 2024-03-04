/* eslint-disable no-undef */
// For a detailed explanation regarding each routes property, visit:
// https://mocks-server.org/docs/usage/routes

// Products data
const PRODUCTS = [
  {
    id: 0,
    name: 'Produto 1',
    active: true
  },
  {
    id: 1,
    name: 'Produto 2',
    active: false
  }
]

module.exports = [
  {
    id: 'get-products', // route id
    url: '/api/products', // url in express format
    method: 'GET', // HTTP method
    variants: [
      {
        id: 'success', // variant id
        type: 'json', // variant handler id
        options: {
          status: 200, // status to send
          body: PRODUCTS // body to send
        }
      },
      {
        id: 'error', // variant id
        type: 'json', // variant handler id
        options: {
          status: 400, // status to send
          // body to send
          body: {
            message: 'Error'
          }
        }
      }
    ]
  },
  {
    id: 'get-product', // route id
    url: '/api/products/:id', // url in express format
    method: 'GET', // HTTP method
    variants: [
      {
        id: 'success', // variant id
        type: 'json', // variant handler id
        options: {
          status: 200, // status to send
          body: PRODUCTS[0] // body to send
        }
      },
      {
        id: 'real', // variant id
        type: 'middleware', // variant handler id
        options: {
          // Express middleware to execute
          middleware: (req, res) => {
            const productId = req.params.id
            const product = PRODUCTS.find((userData) => userData.id === Number(productId))
            if (product) {
              res.status(200)
              res.send(product)
            } else {
              res.status(404)
              res.send({
                message: 'User not found'
              })
            }
          }
        }
      }
    ]
  }
]
