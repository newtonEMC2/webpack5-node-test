const request = require('supertest')

process.env.NODE_ENV = 'test'

describe('auth tests', function () {
    let server

    beforeEach(function () {
        delete require.cache[require.resolve('../server')]
        // eslint-disable-next-line global-require
        server = require('../server')
    })

    afterEach(function () {
        server.close()
    })

    /**
     * data upload
     */
    it('fails when token is wrong on POST /uploadData', async function () {
        return request(server)
            .get('/')
            .set('Accept', 'application/json')
            .expect(res => console.log(res.body))
            .expect(res => { if (res.body.a !== 750) throw new Error("nog good") })
            .expect(200)
    })


})