const supertest = require('supertest')

const testEnv = require('./testEnv')
const app = require('../app')
const api = supertest(app)

beforeEach(async () => {
    await testEnv.initUsers()
})

describe('Authentication Routes', () => {
    let creds = testEnv.creds

    test('A user can login using username', async () => {
        const response = await api
            .post('/api/login')
            .send(creds)

        expect(response.body.token)
    })

    creds = { ...creds, username: 'wayne@example.com' }

    test('A user can login using email', async () => {
        const response = await api
            .post('/api/login')
            .send(creds)

        expect(response.body.token)
    })

    creds = { ...creds, password: 'wrong' }

    test('Error occurs when user enters wrong password', async () => {
        const response = await api
            .post('/api/login')
            .send(creds)
            .expect(401)

        expect(response.body.error)
    })
})

afterAll(() => {
    testEnv.closeConnection()
})