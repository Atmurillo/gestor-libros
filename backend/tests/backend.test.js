const request = require('supertest');
const app = require('../index'); // Asegúrate de que la ruta sea correcta

describe('GET /libros', () => {
  it('debería responder con status 200', async () => {
    const res = await request(app).get('/libros');
    expect(res.statusCode).toBe(200);
  });
});