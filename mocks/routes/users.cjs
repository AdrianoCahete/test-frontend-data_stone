/* eslint-disable no-undef */
// For a detailed explanation regarding each routes property, visit:
// https://mocks-server.org/docs/usage/routes

// users data
const USERS = [
  {
    id: 1,
    name: 'John Doe'
  },
  {
    id: 2,
    name: 'Jane Doe'
  }
]

const ALL_USERS = [
  ...USERS,
  {
    id: 3,
    name: 'Tommy'
  },
  {
    id: 4,
    name: 'Timmy'
  }
]

module.exports = [
  {
    id: 'get-users', // route id
    url: '/api/users', // url in express format
    method: 'GET', // HTTP method
    variants: [
      {
        id: 'success', // variant id
        type: 'json', // variant handler id
        options: {
          status: 200, // status to send
          body: USERS // body to send
        }
      },
      {
        id: 'all', // variant id
        type: 'json', // variant handler id
        options: {
          status: 200, // status to send
          body: ALL_USERS // body to send
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
    id: 'create-user',
    url: '/api/users/new',
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
    id: 'get-user', // route id
    url: '/api/users/:id', // url in express format
    method: 'GET', // HTTP method
    variants: [
      {
        id: 'success', // variant id
        type: 'json', // variant handler id
        options: {
          status: 200, // status to send
          body: USERS[0] // body to send
        }
      },
      {
        id: 'id-3', // variant id
        type: 'json', // variant handler id
        options: {
          status: 200, // status to send
          body: ALL_USERS[2] // body to send
        }
      },
      {
        id: 'real', // variant id
        type: 'middleware', // variant handler id
        options: {
          // Express middleware to execute
          middleware: (req, res) => {
            const userId = req.params.id
            const user = USERS.find((userData) => userData.id === Number(userId))
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
