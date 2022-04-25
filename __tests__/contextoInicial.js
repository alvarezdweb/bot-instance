const request = require('supertest');
const express = require('express');
const router = require('../api/router');

const app = new express();
app.use('/', router);

describe('/contextoInicial', function () {
  test('Should return an object', async () => {
    const res = await request(app).post('/contextoInicial');

    expect(typeof res.body).toBe('object');
  });
});
