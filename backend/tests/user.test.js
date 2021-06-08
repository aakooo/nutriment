const supertest = require('supertest')

const testEnv = require('./testEnv')
const app = require('../app')
const api = supertest(app)


beforeEach(async () => {
    await testEnv.initUsers()
})

test('There is one user', async () => {
    const response = await api.get('/api/users')

    expect(response.body).toHaveLength(1)
})

describe('Get user details functionality', () => {
    test('Returns user details when there is a valid token', async () => {
        //Login to get token
        const loginRes = await api
            .post('/api/login')
            .send(testEnv.creds)

        
    })
})

afterAll(() => {
    testEnv.closeConnection()
})