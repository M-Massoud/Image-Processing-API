import supertest from 'supertest';
import server from '../app';

const request = supertest(server);

describe('testing resizing points', () => {
  it('testing that the resizing route is working', async () => {
    const response = await request.get(
      '/resize?filename=sunset-glow.jpg&width=500&height=500'
    );
    expect(response.status).toBe(200);
  });

  it('testing when the width input isnot a number', async () => {
    const response = await request.get(
      '/resize?filename=sunset-glow.jpg&width=dd&height=500'
    );
    expect(response.status).toBe(400);
  });

  it('testing when the height input isnot a number', async () => {
    const response = await request.get(
      '/resize?filename=sunset-glow.jpg&width=400&height=dd'
    );
    expect(response.status).toBe(400);
  });
});
