const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return 200 OK with "Hello, World!"', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello, World!')
      .end(done);
  });
});
