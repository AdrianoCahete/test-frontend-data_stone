/* eslint-disable no-undef */
// For a detailed explanation regarding each routes property, visit:
// https://mocks-server.org/docs/usage/routes

// Clients data
const CLIENTS = [
  {
    id: 0,
    name: 'Cliente 1',
    docs: '111.111.111-11',
    phone: '11 1111-1111',
    mail: '11@11.com',
    active: true
  },
  {
    id: 1,
    name: 'Cliente 2',
    docs: '222.222.222-22',
    phone: '22 2222-2222',
    mail: '22@22.com',
    active: false
  }
]

module.exports = [
  {
    id: 'get-clients', // route id
    url: '/api/clients', // url in express format
    method: 'GET', // HTTP method
    variants: [
      {
        id: 'success', // variant id
        type: 'json', // variant handler id
        options: {
          status: 200, // status to send
          body: CLIENTS // body to send
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
    id: 'get-client', // route id
    url: '/api/clients/:id', // url in express format
    method: 'GET', // HTTP method
    variants: [
      {
        id: 'success', // variant id
        type: 'json', // variant handler id
        options: {
          status: 200, // status to send
          body: CLIENTS[0] // body to send
        }
      },
      {
        id: 'real', // variant id
        type: 'middleware', // variant handler id
        options: {
          // Express middleware to execute
          middleware: (req, res) => {
            const userId = req.params.id
            const user = CLIENTS.find((userData) => userData.id === Number(userId))
            if (user) {
              res.status(200)
              res.send(user)
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
