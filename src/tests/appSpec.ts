import supertest from 'supertest';
import server from '../app';

const request = supertest(server);

describe('testing end points', () => {
  it('testing the base end point', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});
