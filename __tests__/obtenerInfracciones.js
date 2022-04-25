const request = require('supertest');
const express = require('express');
const router = require('../api/router');

const app = new express();
app.use('/', router);

describe('/obtenerInfracciones', function () {
  test('Should return hasInfractions = false', async () => {
    const res = await request(app).post('/obtenerInfracciones/32200300');

    expect(res.body).toHaveProperty('hasInfractions', false);
  });
  test('Should return hasInfractions = true', async () => {
    const res = await request(app).post('/obtenerInfracciones/32200301');

    expect(res.body).toHaveProperty('hasInfractions', true);
  });
});
