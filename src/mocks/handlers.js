// src/mocks/handlers.js
import { rest } from 'msw';
//import { rest } from '/node_modules/msw/lib/';

// Base de datos simulada
const users = [
  { email: 'test@test.com', password: '12345678', name: 'Usuario Test' }
];

export const handlers = [
  // Login
  rest.post('/api/login', (req, res, ctx) => {
    const { email, password } = req.body;
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      return res(
        ctx.status(200),
        ctx.json({
          token: 'fake-token-123',
          user: { email: user.email, name: user.name }
        })
      );
    }
    
    return res(
      ctx.status(401),
      ctx.json({ message: 'Credenciales incorrectas' })
    );
  }),

  // Get user profile
  rest.get('/api/profile', (req, res, ctx) => {
    // Simular verificación de token
    const token = req.headers.get('Authorization');
    
    if (token === 'Bearer fake-token-123') {
      return res(
        ctx.status(200),
        ctx.json({
          email: 'test@test.com',
          name: 'Usuario Test'
        })
      );
    }
    
    return res(
      ctx.status(401),
      ctx.json({ message: 'No autorizado' })
    );
  })
];