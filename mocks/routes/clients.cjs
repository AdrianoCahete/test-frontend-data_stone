/* eslint-disable no-undef */
// For a detailed explanation regarding each routes property, visit:
// https://mocks-server.org/docs/usage/routes

// Clients data
// Com a api rodando no console, só trocar as infos aqui e dar relod na página. :)
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
  },
  {
    id: 2,
    name: 'Cliente 3',
    docs: '333.333.333-33',
    phone: '33 3333-3333',
    mail: '33@33.com',
    active: true
  }
]

module.exports = [
  {
    id: 'get-clients',
    url: '/api/clients',
    method: 'GET',
    variants: [
      {
        id: 'success',
        type: 'json',
        options: {
          status: 200,
          body: CLIENTS
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
    id: 'create-client',
    url: '/api/clients/new',
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
    id: 'get-client',
    url: '/api/clients/:id',
    method: 'GET',
    variants: [
      {
        id: 'success',
        type: 'json',
        options: {
          status: 200,
          body: CLIENTS[0]
        }
      },
      {
        id: 'real',
        type: 'middleware',
        options: {
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
