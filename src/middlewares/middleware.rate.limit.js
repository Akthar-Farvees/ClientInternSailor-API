import rateLimit from 'express-rate-limit';

const loginLimiter = rateLimit({
  windowMs: 30 * 60 * 1000,
  max: 5,
  message: 'Too many login attempts. Try again later.',
  statusCode: 429,
  headers: true,
  standardHeaders: true,
  legacyHeaders: false,
});

export default loginLimiter;
