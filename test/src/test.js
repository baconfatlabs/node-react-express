const chai = require('chai');
const supertest = require('supertest');
const app = require('./app');

const expect = chai.expect;
const request = supertest(app);

describe('POST /send-json', () => {
  it('should return success status when sending JSON payload', (done) => {
    const payload = {
      url: 'https://example.com',
      payload: { message: 'Hello, world!' },
    };

    request
      .post('/send-json')
      .send(payload)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.have.property('success', true);
        done();
      });
  });

  it('should return error status when missing payload', (done) => {
    request.post('/send-json').expect(400, done);
  });

  it('should return error status when an error occurs', (done) => {
    const payload = {
      url: 'https://example.com',
      payload: { message: 'Hello, world!' },
    };

    // Modify the payload to cause an error
    payload.payload = null;

    request.post('/send-json').send(payload).expect(500, done);
  });
});
