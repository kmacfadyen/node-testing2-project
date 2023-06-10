const request = require('supertest')
const db = require('../data/db-config')
const server = require('../server')
const Joke = require('./jokesModel')

const joke1 = {
    joke: 'Why did the chicken cross the road',
    punchline: 'Because it was free range'
}
const joke2 = {
    joke: 'Why did the chicken cross the road',
    punchline: 'Because it was hungry'
}

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db('jokes').truncate()
})

afterAll(async () => {
    await db.destroy()
})

it ('correct env variable', () => {
    expect(process.env.DB_ENV).toBe('testing')
})

describe('jokes model functions', () => {
    describe('create joke', () => {
        it('adds joke to database', async () => {
            let jokes
            await Joke.createJoke(joke1)
            jokes = await db('jokes')
            expect(jokes).toHaveLength(1)
        })
    })
})
