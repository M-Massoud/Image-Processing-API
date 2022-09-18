import supertest from 'supertest';
import server from '../app';
import fs from 'fs';
import path from 'path';

const request = supertest(server);

const resizedImgsFolder = path.join('src', 'resizedImages');

describe('testing resizing end points', () => {
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

  it('testing the image processing resized succefully and saved', async () => {
    await request.get('/resize?filename=sunset-glow.jpg&width=400&height=400');
    const resizedImgExists = await fs.existsSync(
      path.join(resizedImgsFolder, 'resized-400x400-sunset-glow.jpg')
    );
    expect(resizedImgExists).toBe(true);
  });
});
