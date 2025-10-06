const request = require('supertest');
const app = require('../app.js');

describe('Products API', () => {
  it('should return all products', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.count).toBeGreaterThan(0);
  });

  it('should return a specific product', async () => {
    const res = await request(app).get('/api/products/1');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.id).toBe(1);
    expect(res.body.data.name).toBeDefined();
  });

  it('should return 404 for non-existent product', async () => {
    const res = await request(app).get('/api/products/999');
    expect(res.statusCode).toBe(404);
    expect(res.body.success).toBe(false);
    expect(res.body.error).toBe('Product not found');
  });

  it('should return all products if search query is empty', async () => {
    const res = await request(app).get('/api/products/search');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.count).toBeGreaterThan(0);
  });

  it('should return filtered products for search query', async () => {
    const res = await request(app)
      .get('/api/products/search')
      .query({ q: 'headphones' });

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(
      res.body.data.every(
        (p) =>
          p.name.toLowerCase().includes('headphones') ||
          (p.description &&
            p.description.toLowerCase().includes('headphones'))
      )
    ).toBe(true);
  });

  it('should return empty array for search query with no matches', async () => {
    const res = await request(app)
      .get('/api/products/search')
      .query({ q: 'nonexistent' });

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.length).toBe(0);
  });
});