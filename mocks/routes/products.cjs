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
    id: 'get-products',
    url: '/api/products',
    method: 'GET',
    variants: [
      {
        id: 'success',
        type: 'json',
        options: {
          status: 200,
          body: PRODUCTS
        }
      },
      {
        id: 'error',
        type: 'json',
        options: {
          status: 400,
          body: {
            message: 'Error'
          }
        }
      }
    ]
  },
  {
    id: 'create-product',
    url: '/api/products/new',
    method: 'POST',
    variants: [
      {
        id: 'success',
        type: 'status',
        options: {
          status: 201
        }
      }
    ]
  },
  {
    id: 'get-product',
    url: '/api/products/:id',
    method: 'GET',
    variants: [
      {
        id: 'success',
        type: 'json',
        options: {
          status: 200,
          body: PRODUCTS[0]
        }
      },
      {
        id: 'real',
        type: 'middleware',
        options: {
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
